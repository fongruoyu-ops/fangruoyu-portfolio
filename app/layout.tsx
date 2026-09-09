import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "方若玉 · UX / 交互设计师";
const description =
  "方若玉的个人作品集：AI 产品、复杂业务系统与多终端体验设计。";
const assetPath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
const metadataOrigin =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.CLOUDBASE_STATIC_EXPORT === "1"
    ? "https://fangruoyu-ux-d4ggcfuvk2b4a3354-1313385791.tcloudbaseapp.com"
    : "https://fangruoyu-ux-portfolio.sonderx437.chatgpt.site");

export const metadata: Metadata = {
  metadataBase: new URL("/", metadataOrigin),
  title,
  description,
  icons: {
    icon: [{ url: assetPath("/about/ruoyu-avatar.png"), type: "image/png" }],
    shortcut: assetPath("/about/ruoyu-avatar.png"),
    apple: assetPath("/about/ruoyu-avatar.png"),
  },
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: assetPath("/og.png"), width: 1733, height: 907 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [assetPath("/og.png")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-theme="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script id="baidu-analytics" strategy="afterInteractive">
          {`
            var _hmt = window._hmt = window._hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?676b67cd73bf4c25a6bb1626f530a729";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
            })();
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "yfhx00cjkm");
          `}
        </Script>
      </body>
    </html>
  );
}
