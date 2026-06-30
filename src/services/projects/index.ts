import type { ProjectsService } from '../../types'
import { PROJECTS, SCREENSHOTS } from '../../data/projects'

// Implementación estática — los datos viven en src/data/projects.ts.
// Si en el futuro se necesita una API real, reemplazar esta clase
// por una que use fetch() apuntando a VITE_API_BASE_URL.
class StaticProjectsService implements ProjectsService {
  async getProjects() {
    return PROJECTS
  }

  async getProjectScreenshots(projectId: string) {
    return SCREENSHOTS[projectId] ?? []
  }
}

export const projectsService: ProjectsService = new StaticProjectsService()
