
interface ProjectCardProps {
  title: string
  description: React.ReactNode
  technologies: string[]
  url?: string
}


export default function ProjectCard({ title, description, technologies, url }: ProjectCardProps) {
  return (
    <div className="border border-gray-200 rounded-md p-4 w-full print:w-full print:p-2">
      <h3 className="font-bold mb-1 print-text-sm">{title}</h3>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-sm mb-2 inline-block print-text-xs"
        >
          {url}
        </a>
      )}
      <p className="text-gray-700 text-sm mb-4 print-text-xs">{description}</p>

      <div className="flex flex-wrap gap-1">
        {technologies.map((tech, index) => (
          <span key={index} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded print-text-xs print:py-0">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

