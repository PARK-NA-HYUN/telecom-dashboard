export type CarrierId = "lgu" | "skt" | "kt"

export const CARRIERS: Record<CarrierId, {
  id: CarrierId
  name: string
  shortName: string
  color: string
  lightColor: string
}> = {
  lgu: {
    id: "lgu",
    name: "LG U+",
    shortName: "U+",
    color: "#E6007E",
    lightColor: "#fde8f3",
  },
  skt: {
    id: "skt",
    name: "SKT",
    shortName: "SKT",
    color: "#E42313",
    lightColor: "#fde8e6",
  },
  kt: {
    id: "kt",
    name: "KT",
    shortName: "KT",
    color: "#009D42",
    lightColor: "#e6f6ec",
  },
}

export const CARRIER_IDS: CarrierId[] = ["lgu", "skt", "kt"]
