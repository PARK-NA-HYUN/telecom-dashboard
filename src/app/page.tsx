import { Header } from "@/components/Header"
import { KpiRow } from "@/components/KpiRow"
import { BannerSection } from "@/components/BannerSection"
import { EventSection } from "@/components/EventSection"
import { VasSection } from "@/components/VasSection"
import { META } from "@/data/meta"

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#f0f2f5" }}>
      <Header />
      <KpiRow />
      <BannerSection />
      <EventSection />
      <VasSection />
      <footer className="max-w-[1400px] mx-auto px-4 pb-10">
        <div className="rounded-lg border border-yellow-300 bg-yellow-50 px-4 py-3 text-xs text-yellow-800 leading-relaxed">
          ⚠️ <strong>안내사항</strong>: 본 비교표는 {META.date} 기준으로 업데이트되었습니다.
          실제 서비스명, 가격, 제공 내용은 통신사 정책에 따라 변경될 수 있으며,
          정확한 최신 정보는 각 통신사 공식 사이트에서 직접 확인하시기 바랍니다.
        </div>
      </footer>
    </main>
  )
}
