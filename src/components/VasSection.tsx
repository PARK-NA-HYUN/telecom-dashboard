import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { VasTabContent } from "@/components/VasTabContent"
import { TAB_LABELS, TAB_ICONS, type TabKey } from "@/data/services"
import { CARRIERS, CARRIER_IDS } from "@/lib/carriers"
import type { DailySnapshot } from "@/data/snapshots"

const TABS = Object.keys(TAB_LABELS) as TabKey[]

export function VasSection({ snapshot }: { snapshot: DailySnapshot }) {
  return (
    <section className="max-w-[1400px] mx-auto px-4 pb-10">
      <h2 className="text-sm font-bold text-gray-700 mb-3">📋 VAS 부가서비스 비교</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        {CARRIER_IDS.map((id) => (
          <div
            key={id}
            className="text-[11px] text-gray-600 bg-white border rounded-lg p-3 leading-relaxed shadow-sm"
            style={{ borderLeft: `4px solid ${CARRIERS[id].color}` }}
          >
            <strong style={{ color: CARRIERS[id].color }}>{CARRIERS[id].name}</strong>{" "}
            {snapshot.vasAnalysis[id]}
          </div>
        ))}
      </div>

      <Card className="border shadow-sm">
        <CardContent className="pt-4 px-4">
          <Tabs defaultValue="recommend">
            <TabsList className="flex flex-wrap h-auto gap-1 bg-gray-100 p-1 rounded-lg justify-center mb-5">
              {TABS.map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="text-xs font-semibold data-[state=active]:bg-[#1a1a2e] data-[state=active]:text-white rounded px-3"
                >
                  {TAB_ICONS[tab]} {TAB_LABELS[tab]}
                </TabsTrigger>
              ))}
            </TabsList>
            {TABS.map((tab) => (
              <TabsContent key={tab} value={tab}>
                <VasTabContent tab={tab} services={snapshot.services} />
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}
