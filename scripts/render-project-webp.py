from __future__ import annotations

import shutil
import subprocess
import tempfile
from pathlib import Path

from PIL import Image
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
PROJECTS_DIR = ROOT / "public" / "projects"
OUTPUT_DIR = PROJECTS_DIR / "web"
HD_OUTPUT_DIR = PROJECTS_DIR / "web-hd"
PROJECT_IDS = (
    "ctrip-trip-planner",
    "kuaishou-ai",
    "kuaishou-3",
    "meituan-1",
    "meituan-2",
)
STANDARD_WIDTH = 1600
STANDARD_QUALITY = 82
HD_WIDTH = 2880
HD_QUALITY = 92


def render_project(project_id: str) -> None:
    source = PROJECTS_DIR / f"{project_id}.pdf"
    destination = OUTPUT_DIR / project_id
    hd_destination = HD_OUTPUT_DIR / project_id
    page_count = len(PdfReader(source).pages)

    for output_directory in (destination, hd_destination):
        output_directory.mkdir(parents=True, exist_ok=True)
        for stale_page in output_directory.glob("*.webp"):
            stale_page.unlink()

    with tempfile.TemporaryDirectory(prefix=f"{project_id}-") as temporary_directory:
        temporary = Path(temporary_directory)
        for page_number in range(1, page_count + 1):
            prefix = temporary / "page"
            subprocess.run(
                [
                    "pdftoppm",
                    "-f",
                    str(page_number),
                    "-l",
                    str(page_number),
                    "-singlefile",
                    "-scale-to-x",
                    str(HD_WIDTH),
                    "-scale-to-y",
                    "-1",
                    "-png",
                    str(source),
                    str(prefix),
                ],
                check=True,
                stdout=subprocess.DEVNULL,
            )

            with Image.open(prefix.with_suffix(".png")) as image:
                hd_image = image.convert("RGB")
                standard_height = round(hd_image.height * STANDARD_WIDTH / hd_image.width)
                standard_image = hd_image.resize(
                    (STANDARD_WIDTH, standard_height),
                    Image.Resampling.LANCZOS,
                )

                standard_image.save(
                    destination / f"{page_number:03d}.webp",
                    "WEBP",
                    quality=STANDARD_QUALITY,
                    method=6,
                )
                hd_image.save(
                    hd_destination / f"{page_number:03d}.webp",
                    "WEBP",
                    quality=HD_QUALITY,
                    method=6,
                )

            print(f"{project_id}: {page_number}/{page_count}", flush=True)


def main() -> None:
    if shutil.which("pdftoppm") is None:
        raise RuntimeError("pdftoppm is required")

    for project_id in PROJECT_IDS:
        render_project(project_id)


if __name__ == "__main__":
    main()
