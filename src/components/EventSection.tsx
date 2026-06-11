"use client"

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CARRIERS, CARRIER_IDS } from "@/lib/carriers"
import { ChangeIndicator } from "@/components/ChangeIndicator"
import type { DailySnapshot } from "@/data/snapshots"

export function EventSection({ snapshot }: { snapshot: DailySnapshot }) {
  const chartData = CARRIER_IDS.map((id) => ({
    name: CARRIERS[id].shortName,
    count: snapshot.events.filter((e) => e.carrier === id).length,
    color: CARRIERS[id].color,
  }))

  return (
    <section className="max-w-[1400px] mx-auto px-4 pb-6">
      <h2 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
        🎉 진행중인 추천이벤트
        <span className="text-xs font-normal text-gray-400">전일 대비 변동 분석</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card className="border shadow-sm">
          <CardHeader className="pb-1 pt-3 px-4">
            <CardTitle className="text-xs font-semibold text-gray-600">이벤트 수 비교</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <ResponsiveContainer width="100%" height={110}>
              <BarChart data={chartData} layout="vertical" margin={{ left: 0, right: 20, top: 4, bottom: 4 }}>
                <XAxis type="number" domain={[0, 10]} tick={{ fontSize: 10 }} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 12, fontWeight: 700 }} width={32} />
                <Tooltip formatter={(v) => [`${v}건`, "이벤트 수"]} />
                <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                  {chartData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {CARRIER_IDS.map((id) => {
          const events = snapshot.events.filter((e) => e.carrier === id)
          return (
            <Card key={id} className="border shadow-sm overflow-hidden">
              <CardHeader
                className="pb-2 pt-3 px-4"
                style={{ borderBottom: `3px solid ${CARRIERS[id].color}` }}
              >
                <CardTitle className="text-xs font-bold flex items-center gap-1.5" style={{ color: CARRIERS[id].color }}>
                  {CARRIERS[id].name}
                  <span className="text-[10px] font-normal text-gray-400">({events.length})</span>
                </CardTitle>
                <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                  {snapshot.eventAnalysis[id]}
                </p>
              </CardHeader>
              <CardContent className="px-4 pt-3 pb-4 space-y-2">
                {events.map((evt, i) => (
                  <a
                    key={i}
                    href={evt.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-2 p-2 rounded border border-gray-100 hover:border-gray-300 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-800 truncate group-hover:text-blue-600 transition-colors">
                        {evt.title}
                      </p>
                      <p className="text-[11px] text-gray-400 truncate">{evt.period}</p>
                    </div>
                    <ChangeIndicator isNew={evt.isNew} />
                  </a>
                ))}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
