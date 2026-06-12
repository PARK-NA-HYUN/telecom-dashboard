import type { CarrierId } from "@/lib/carriers"
import type { Banner } from "@/data/banners"
import type { TelecomEvent } from "@/data/events"
import type { Service } from "@/data/services"

export type CarrierText = Record<CarrierId, string>

export type DailySnapshot = {
  date: string // YYYY-MM-DD
  insights?: string[] // 3줄 이내 비교 인사이트
  bannerAnalysis: CarrierText
  eventAnalysis: CarrierText
  vasAnalysis: CarrierText
  banners: Banner[]
  events: TelecomEvent[]
  services: Service[]
}
