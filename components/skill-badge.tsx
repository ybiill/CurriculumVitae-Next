import type { ReactNode } from "react"

interface SkillBadgeProps {
  children: ReactNode
}

export default function SkillBadge({ children }: SkillBadgeProps) {
  return (
    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm font-medium print-text-xs print:py-0">
      {children}
    </span>
  )
}

