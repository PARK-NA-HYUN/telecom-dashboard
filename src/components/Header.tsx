import { CARRIERS, CARRIER_IDS } from "@/lib/carriers"
import { DatePicker } from "@/components/DatePicker"
import type { DailySnapshot } from "@/data/snapshots"

export function Header({
  snapshot,
  availableDates,
  onSelectDate,
}: {
  snapshot: DailySnapshot
  availableDates: string[]
  onSelectDate: (date: string) => void
}) {
  return (
    <header className="bg-[#1a1a2e] text-white px-4 py-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold tracking-tight">
            통신 3사 VAS 부가서비스 비교 대시보드
          </h1>
          <div className="mt-3">
            <DatePicker
              selected={snapshot.date}
              availableDates={availableDates}
              onSelect={onSelectDate}
            />
          </div>
          <p className="mt-2 text-sm text-gray-400">유플러스 · SKT · KT</p>
          <div className="flex justify-center gap-3 mt-3">
            {CARRIER_IDS.map((id) => (
              <span
                key={id}
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{ backgroundColor: CARRIERS[id].color }}
              >
                {CARRIERS[id].name}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          {CARRIER_IDS.map((id) => (
            <div
              key={id}
              className="rounded-lg p-3 bg-white/5 border border-white/10"
            >
              <p className="font-bold mb-1 text-xs" style={{ color: CARRIERS[id].color }}>
                {CARRIERS[id].name}
              </p>
              <p className="text-xs text-gray-300 leading-relaxed">
                {snapshot.vasAnalysis[id]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
