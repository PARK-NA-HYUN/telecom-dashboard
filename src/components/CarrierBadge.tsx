import { CARRIERS, type CarrierId } from "@/lib/carriers"

export function CarrierBadge({ carrier }: { carrier: CarrierId }) {
  const c = CARRIERS[carrier]
  return (
    <span
      className="inline-block text-[11px] font-bold px-2 py-0.5 rounded-full text-white"
      style={{ backgroundColor: c.color }}
    >
      {c.name}
    </span>
  )
}
