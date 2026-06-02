export function ChangeIndicator({ isNew }: { isNew: boolean }) {
  if (isNew) {
    return (
      <span className="shrink-0 inline-block text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-200">
        NEW
      </span>
    )
  }
  return (
    <span className="shrink-0 inline-block text-[10px] font-bold px-1.5 py-0.5 rounded bg-gray-100 text-gray-400 border border-gray-200">
      유지
    </span>
  )
}
