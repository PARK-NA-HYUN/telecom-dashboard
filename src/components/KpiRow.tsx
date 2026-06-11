import { Card, CardContent } from "@/components/ui/card"
import { CARRIERS, CARRIER_IDS } from "@/lib/carriers"
import type { DailySnapshot } from "@/data/snapshots"

export function KpiRow({ snapshot }: { snapshot: DailySnapshot }) {
  const bannerCounts = CARRIER_IDS.map((id) => ({
    id,
    count: snapshot.banners.filter((b) => b.carrier === id).length,
  }))
  const eventCounts = CARRIER_IDS.map((id) => ({
    id,
    count: snapshot.events.filter((e) => e.carrier === id).length,
  }))

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-5">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {bannerCounts.map(({ id, count }) => (
          <Card key={`banner-${id}`} className="border shadow-sm">
            <CardContent className="p-4">
              <div className="text-2xl font-extrabold" style={{ color: CARRIERS[id].color }}>
                {count}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">{CARRIERS[id].shortName} 배너</div>
            </CardContent>
          </Card>
        ))}
        {eventCounts.map(({ id, count }) => (
          <Card key={`event-${id}`} className="border shadow-sm">
            <CardContent className="p-4">
              <div className="text-2xl font-extrabold" style={{ color: CARRIERS[id].color }}>
                {count}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">{CARRIERS[id].shortName} 이벤트</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
