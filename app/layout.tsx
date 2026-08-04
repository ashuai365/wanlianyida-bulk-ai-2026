import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "大宗智能体｜万联易达",
  description: "数据智能体与撮合智能体双引擎驱动，贯通资讯研判、商机撮合与交易推进，重构大宗商品产业的信息效率与交易效率。",
  openGraph: { title: "大宗智能体｜万联易达", description: "双引擎贯通资讯研判、商机撮合与交易推进。", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "大宗智能体｜万联易达", description: "双引擎贯通资讯研判、商机撮合与交易推进。", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
