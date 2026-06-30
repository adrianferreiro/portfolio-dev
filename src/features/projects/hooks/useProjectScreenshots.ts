import { useEffect, useState } from 'react'
import type { Screenshot } from '../../../types'
import { projectsService } from '../../../services/projects'

interface UseProjectScreenshotsResult {
  screenshots: Screenshot[]
  loading: boolean
  error: string | null
}

export function useProjectScreenshots(projectId: string): UseProjectScreenshotsResult {
  const [screenshots, setScreenshots] = useState<Screenshot[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    setScreenshots([])

    projectsService
      .getProjectScreenshots(projectId)
      .then(setScreenshots)
      .catch(() => setError('No se pudieron cargar las capturas.'))
      .finally(() => setLoading(false))
  }, [projectId])

  return { screenshots, loading, error }
}
