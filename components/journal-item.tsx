import type React from "react"
interface JournalItemProps {
  title: string | React.ReactNode
  journal: string
  date: string
}

export default function JournalItem({ title, journal, date }: JournalItemProps) {
  return (
    <div className="mb-6 print:mb-3">
      <h3 className="font-medium print:text-sm">{title}</h3>
      <div className="flex flex-col md:flex-row justify-between print:flex-row">
        <p className="text-gray-700 print:text-xs">{journal}</p>
        <span className="text-gray-600 print:text-xs">{date}</span>
      </div>
    </div>
  )
}

