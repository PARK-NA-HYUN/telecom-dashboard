"use client"

import { RadialBarChart, RadialBar, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { CARRIERS, CARRIER_IDS } from "@/lib/carriers"
import { SERVICES, TAB_HREFS, type TabKey } from "@/data/services"

export function VasTabContent({ tab }: { tab: TabKey }) {
  const tabServices = SERVICES.filter((s) => s.tab === tab)

  const radialData = [...CARRIER_IDS].reverse().map((id) => ({
    name: CARRIERS[id].name,
    count: tabServices.filter((s) => s.carrier === id).length,
    fill: CARRIERS[id].color,
  }))

  const maxRank = Math.max(
    ...CARRIER_IDS.map((id) => tabServices.filter((s) => s.carrier === id).length)
  )

  return (
    <div className="space-y-5">
      {/* 차트 + 카테고리 분포 */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-56 shrink-0">
          <p className="text-[11px] font-semibold text-gray-500 mb-1">서비스 수 (3사)</p>
          <ResponsiveContainer width="100%" height={180}>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="25%"
              outerRadius="85%"
              data={radialData}
              startAngle={180}
              endAngle={0}
            >
              <RadialBar
                dataKey="count"
                label={{ position: "insideStart", fill: "#fff", fontSize: 11, fontWeight: 700 }}
              />
              <Tooltip formatter={(v, name) => [`${v}개`, name]} />
              <Legend
                iconSize={8}
                formatter={(value) => <span className="text-[11px]">{value}</span>}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
          {CARRIER_IDS.map((id) => {
            const carrierServices = tabServices.filter((s) => s.carrier === id)
            const categories = carrierServices.reduce<Record<string, number>>((acc, s) => {
              acc[s.category] = (acc[s.category] ?? 0) + 1
              return acc
            }, {})
            return (
              <div
                key={id}
                className="rounded-lg border p-3 bg-white"
                style={{ borderLeft: `4px solid ${CARRIERS[id].color}` }}
              >
                <p className="text-xs font-bold mb-2" style={{ color: CARRIERS[id].color }}>
                  {CARRIERS[id].name} ({carrierServices.length}개)
                </p>
                <div className="space-y-1">
                  {Object.entries(categories).map(([cat, cnt]) => (
                    <div key={cat} className="flex items-center justify-between">
                      <span className="text-[11px] text-gray-600">{cat}</span>
                      <span
                        className="text-[11px] font-bold px-1.5 py-0.5 rounded"
                        style={{ backgroundColor: CARRIERS[id].lightColor, color: CARRIERS[id].color }}
                      >
                        {cnt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 3사 비교 테이블 */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-[#1a1a2e]">
              <th className="px-3 py-2 text-left font-semibold text-gray-300 w-8">순위</th>
              {CARRIER_IDS.map((id) => (
                <th
                  key={id}
                  className="px-3 py-2 text-left font-bold"
                  style={{ color: CARRIERS[id].lightColor }}
                >
                  {CARRIERS[id].name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: maxRank }).map((_, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                <td className="px-3 py-2 font-bold text-gray-300 text-center">{i + 1}</td>
                {CARRIER_IDS.map((id) => {
                  const svc = tabServices.filter((s) => s.carrier === id)[i]
                  return (
                    <td key={id} className="px-3 py-2 align-top">
                      {svc ? (
                        <a
                          href={svc.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block"
                        >
                          <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {svc.name}
                          </span>
                          <span
                            className="ml-1.5 text-[10px] font-bold px-1 py-0.5 rounded"
                            style={{
                              backgroundColor: CARRIERS[id].lightColor,
                              color: CARRIERS[id].color,
                            }}
                          >
                            {svc.price}
                          </span>
                          <span className="block text-[10px] text-gray-400 mt-0.5">{svc.category}</span>
                        </a>
                      ) : (
                        <span className="text-gray-200">—</span>
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 전체보기 링크 */}
      <div className="flex gap-2 justify-end flex-wrap">
        {CARRIER_IDS.map((id) => (
          <a
            key={id}
            href={TAB_HREFS[tab][id]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-gray-400 border border-gray-200 rounded-full px-3 py-1 hover:bg-gray-100 transition-colors"
          >
            {CARRIERS[id].shortName} 전체보기 ↗
          </a>
        ))}
      </div>
    </div>
  )
}
