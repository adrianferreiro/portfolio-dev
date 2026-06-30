import type { Project, Screenshot, ProjectsService } from '../../types'

const BASE_URL = import.meta.env.VITE_API_BASE_URL as string

export class RealProjectsService implements ProjectsService {
  async getProjects(): Promise<Project[]> {
    const res = await fetch(`${BASE_URL}/projects`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return res.json()
  }

  async getProjectScreenshots(projectId: string): Promise<Screenshot[]> {
    const res = await fetch(`${BASE_URL}/projects/${projectId}/screenshots`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return res.json()
  }
}
