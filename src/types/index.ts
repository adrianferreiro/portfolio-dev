export interface Project {
  id: string
  name: string
  description: string
  tech: string[]
  category: string
  year: number
  thumbnail?: string
}

export interface Screenshot {
  id: string
  url: string
  caption?: string
}

export interface ProjectsService {
  getProjects(): Promise<Project[]>
  getProjectScreenshots(projectId: string): Promise<Screenshot[]>
}
