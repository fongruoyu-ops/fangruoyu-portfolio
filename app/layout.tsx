import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
const metadataOrigin =
  process.env.CLOUDBASE_STATIC_EXPORT === "1"
    ? "https://fangruoyu-ux-d4ggcfuvk2b4a3354-1313385791.tcloudbaseapp.com"
    : "https://fangruoyu-ux-portfolio.sonderx437.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(metadataOrigin),
  title,
  description,
  icons: {
    icon: [{ url: "/about/ruoyu-avatar.png", type: "image/png" }],
    shortcut: "/about/ruoyu-avatar.png",
    apple: "/about/ruoyu-avatar.png",
  },
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: "/og.png", width: 1733, height: 907 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
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
      </body>
    </html>
  );
}
