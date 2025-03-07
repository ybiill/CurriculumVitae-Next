interface OrganizationItemProps {
  organization: string
  role: React.ReactNode
  period: string

}

export default function OrganizationItem({ organization, role, period }: OrganizationItemProps) {
  return (
    <div className="mb-4 print:mb-2">
      <div className="flex flex-col md:flex-row justify-between print:flex-row">
        <div>
          <h3 className="font-medium print:text-sm">{organization}</h3>
          <p className="text-gray-700 print:text-xs">{role}</p>
        </div>
        <span className="text-gray-600 mt-1 md:mt-0 print:mt-0 print:text-xs">{period}</span>
      </div>
    </div>
  )
}

