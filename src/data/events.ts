import type { CarrierId } from "@/lib/carriers"

export type TelecomEvent = {
  carrier: CarrierId
  title: string
  badge: string
  period: string
  href: string
  imgSrc: string
  isNew: boolean
}

// 날짜별 이벤트 데이터는 src/data/snapshots/ 에서 관리합니다.
