import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"
import "./globals.css"

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
})

export const metadata: Metadata = {
  title: "통신 3사 VAS 부가서비스 비교 대시보드",
  description: "유플러스 · SKT · KT 모바일 부가서비스 비교 (2026-06-02 기준)",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
