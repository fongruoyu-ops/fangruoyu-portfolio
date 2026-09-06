import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>方若玉 · UX \/ 交互设计师<\/title>/i);
  assert.match(html, /About me/);
  assert.match(html, /Career journey/);
  assert.match(html, /Highlighted work/);
  assert.match(html, /Trip Planner 对话体验优化/);
  assert.match(html, /携程<!-- --> · <!-- -->对话式AI体验/);
  assert.match(html, /👋 Hi,/);
  assert.match(html, /达人分销全链路体验升级/);
  assert.doesNotMatch(html, /商家服务 \/ 运营工具案例封面|站外推广流量池案例封面/);
  assert.match(html, /17305691755/);
  assert.match(html, /fangruoyu2023@163\.com/);
  assert.match(html, /about\/ruoyu-avatar\.png/);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});

test("ships the portfolio assets and interactions", async () => {
  const [page, layout, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /navigator\.clipboard\.writeText/);
  assert.match(page, /data-column="0"/);
  assert.match(page, /data-column="1"/);
  assert.match(page, /data-column="2"/);
  assert.match(layout, /ruoyu-avatar\.png/);
  assert.match(css, /scroll-snap-type:\s*x mandatory/);
  assert.match(css, /html\[data-theme="dark"\]/);

  await Promise.all([
    access(new URL("../public/about/ruoyu-avatar.png", import.meta.url)),
    access(new URL("../public/projects/kuaishou-ai.pdf", import.meta.url)),
    access(new URL("../public/projects/ctrip-trip-planner.pdf", import.meta.url)),
    access(new URL("../public/projects/meituan-2.pdf", import.meta.url)),
  ]);
});
