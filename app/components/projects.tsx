import Link from 'next/link'

export type Project = {
  title: string
  description: string
  githubUrl: string
  date: string
}

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with Next.js and TailwindCSS',
    githubUrl: 'https://github.com/jordanplows/portfolio',
    date: '2023-12'
  },
  // Add more projects here
]

export function BuildingInPublic() {
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold tracking-tighter">Building in Public</h2>
      <div className="space-y-10">
        {projects.map((project, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-neutral-200 dark:border-neutral-800">
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800" />
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{project.title}</h3>
                <span className="text-sm text-neutral-500">{project.date}</span>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300">{project.description}</p>
              <Link 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="mr-1"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                View on GitHub
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 