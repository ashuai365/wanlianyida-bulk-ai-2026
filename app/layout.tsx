import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "大宗智能体｜万联易达",
  description: "大宗行业的 AI 入口：连接行情、资讯、研报与商机，让市场判断更快转化为业务行动。",
  openGraph: { title: "大宗智能体｜万联易达", description: "先读懂市场，再把判断变成行动。", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "大宗智能体｜万联易达", description: "先读懂市场，再把判断变成行动。", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
