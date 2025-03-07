import type { ReactNode } from "react"

interface ExperienceItemProps {
  company: string
  role: string | ReactNode
  period: string
  location?: string
  technologies: string[]
  children: ReactNode
}

export default function ExperienceItem({
  company,
  role,
  period,
  location = "",
  technologies,
  children,
}: ExperienceItemProps) {
  return (
    <div className="mb-8 print:mb-2">
      <div className="flex flex-col md:flex-row justify-between mb-2 print:mb-1 print:flex-row">
        <div>
          <h3 className="font-bold print:text-sm">
            {company}
            {location && <span className="ml-2 text-sm font-normal text-gray-600 print:text-xs">{location}</span>}
          </h3>
          <p className="font-medium print:text-xs">{role}</p>
        </div>
        <span className="text-gray-600 mt-1 md:mt-0 print:mt-0 print:text-xs">{period}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-3 print:mb-1 print:gap-1">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded print:text-xs print:px-1 print:py-0"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="text-gray-700 print:text-xs">{children}</div>
    </div>
  )
}

