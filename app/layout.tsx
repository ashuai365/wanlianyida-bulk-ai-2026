import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "大宗智能体｜万联易达",
  description: "让产业看得见变化、算得清影响、抓得住机会。大宗智能体连接数据、知识与产业资源，创造社会价值、行业价值与客户价值。",
  openGraph: { title: "大宗智能体｜万联易达", description: "让产业看得见变化，算得清影响，抓得住机会。", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "大宗智能体｜万联易达", description: "让产业看得见变化，算得清影响，抓得住机会。", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
