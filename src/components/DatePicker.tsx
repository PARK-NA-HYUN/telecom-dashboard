"use client"

import { useEffect, useRef, useState } from "react"

const DAY_LABELS = ["일", "월", "화", "수", "목", "금", "토"]

function formatKorean(date: string) {
  const d = new Date(date + "T00:00:00")
  return `${date} (${DAY_LABELS[d.getDay()]})`
}

export function DatePicker({
  selected,
  availableDates,
  onSelect,
}: {
  selected: string
  availableDates: string[]
  onSelect: (date: string) => void
}) {
  const [open, setOpen] = useState(false)
  const initial = new Date(selected + "T00:00:00")
  const [viewYear, setViewYear] = useState(initial.getFullYear())
  const [viewMonth, setViewMonth] = useState(initial.getMonth()) // 0-based
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [open])

  const firstDay = new Date(viewYear, viewMonth, 1).getDay()
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
  const cells: (number | null)[] = [
    ...Array.from({ length: firstDay }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]

  const toDateStr = (day: number) =>
    `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`

  const prevMonth = () => {
    if (viewMonth === 0) { setViewYear(viewYear - 1); setViewMonth(11) }
    else setViewMonth(viewMonth - 1)
  }
  const nextMonth = () => {
    if (viewMonth === 11) { setViewYear(viewYear + 1); setViewMonth(0) }
    else setViewMonth(viewMonth + 1)
  }

  return (
    <div className="relative inline-block" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
      >
        📅 {formatKorean(selected)}
        <span className="text-xs opacity-70">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="absolute left-1/2 z-50 mt-2 w-72 -translate-x-1/2 rounded-xl border border-gray-200 bg-white p-4 text-gray-800 shadow-xl">
          <div className="mb-3 flex items-center justify-between">
            <button onClick={prevMonth} className="rounded px-2 py-1 text-sm hover:bg-gray-100">◀</button>
            <span className="text-sm font-bold">{viewYear}년 {viewMonth + 1}월</span>
            <button onClick={nextMonth} className="rounded px-2 py-1 text-sm hover:bg-gray-100">▶</button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center">
            {DAY_LABELS.map((d, i) => (
              <div key={d} className={`text-[11px] font-semibold py-1 ${i === 0 ? "text-red-400" : i === 6 ? "text-blue-400" : "text-gray-400"}`}>
                {d}
              </div>
            ))}
            {cells.map((day, idx) => {
              if (day === null) return <div key={`empty-${idx}`} />
              const dateStr = toDateStr(day)
              const hasData = availableDates.includes(dateStr)
              const isSelected = dateStr === selected
              return (
                <button
                  key={dateStr}
                  disabled={!hasData}
                  onClick={() => { onSelect(dateStr); setOpen(false) }}
                  className={`h-8 w-8 mx-auto rounded-full text-xs transition-colors ${
                    isSelected
                      ? "bg-[#1a1a2e] font-bold text-white"
                      : hasData
                      ? "bg-blue-50 font-bold text-blue-700 hover:bg-blue-100 ring-1 ring-blue-200"
                      : "text-gray-300 cursor-default"
                  }`}
                >
                  {day}
                </button>
              )
            })}
          </div>

          <p className="mt-3 text-center text-[11px] text-gray-400">
            파란 날짜에 데이터가 있어요
          </p>
        </div>
      )}
    </div>
  )
}
