import type { DailySnapshot } from "./types"
import { SNAPSHOT as S20260602 } from "./2026-06-02"
import { SNAPSHOT as S20260604 } from "./2026-06-04"

export type { DailySnapshot } from "./types"

// 새 날짜 스냅샷을 추가하면 여기에 등록 (날짜 오름차순 유지)
export const SNAPSHOTS: DailySnapshot[] = [S20260602, S20260604]

export const AVAILABLE_DATES = SNAPSHOTS.map((s) => s.date)

export const LATEST_SNAPSHOT = SNAPSHOTS[SNAPSHOTS.length - 1]

export function getSnapshot(date: string): DailySnapshot {
  return SNAPSHOTS.find((s) => s.date === date) ?? LATEST_SNAPSHOT
}
