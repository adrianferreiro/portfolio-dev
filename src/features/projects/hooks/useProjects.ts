import { useEffect, useState } from 'react'
import type { Project } from '../../../types'
import { projectsService } from '../../../services/projects'

interface UseProjectsResult {
  projects: Project[]
  loading: boolean
  error: string | null
}

export function useProjects(): UseProjectsResult {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    projectsService
      .getProjects()
      .then(setProjects)
      .catch(() => setError('No se pudieron cargar los proyectos.'))
      .finally(() => setLoading(false))
  }, [])

  return { projects, loading, error }
}
