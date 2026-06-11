import type { CarrierId } from "@/lib/carriers"

export type Banner = {
  carrier: CarrierId
  title: string
  caption: string
  href: string
  imgSrc: string
  changed: boolean
}

// 날짜별 배너 데이터는 src/data/snapshots/ 에서 관리합니다.
