import type { DailySnapshot } from "@/data/snapshots"

export function InsightBanner({ snapshot }: { snapshot: DailySnapshot }) {
  if (!snapshot.insights?.length) return null

  return (
    <section className="max-w-[1400px] mx-auto px-4 pb-4">
      <div className="rounded-xl border border-blue-200 bg-white shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 bg-[#1a1a2e] px-4 py-2.5">
          <span className="text-[11px] font-bold text-white tracking-wide">💡 TODAY'S INSIGHT</span>
          <span className="ml-auto text-[10px] text-gray-400">{snapshot.date} 기준 3사 배너·이벤트 비교 분석</span>
        </div>
        <ul className="divide-y divide-blue-50">
          {snapshot.insights.map((line, i) => (
            <li key={i} className="flex items-start gap-3 px-4 py-2.5">
              <span className="shrink-0 mt-0.5 text-[11px] font-bold text-blue-400 w-4">{i + 1}</span>
              <p className="text-[12px] text-gray-700 leading-relaxed">{line}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
