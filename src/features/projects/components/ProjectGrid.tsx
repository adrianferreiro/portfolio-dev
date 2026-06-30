import type { Project } from '../../../types'
import { useProjects } from '../hooks/useProjects'
import { ProjectCard } from './ProjectCard'
import { Spinner } from '../../../shared/components/Spinner'

interface ProjectGridProps {
  onSelectProject: (project: Project) => void
}

export function ProjectGrid({ onSelectProject }: ProjectGridProps) {
  const { projects, loading, error } = useProjects()

  if (loading) {
    return (
      <div className="flex justify-center items-center py-24">
        <Spinner size="lg" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-24">
        <p className="text-red-400 mb-4">{error}</p>
        <button
          className="text-indigo-400 hover:text-indigo-300 text-sm underline"
          onClick={() => window.location.reload()}
        >
          Reintentar
        </button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {projects.map((project, i) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={i}
          onSelect={onSelectProject}
        />
      ))}
    </div>
  )
}
