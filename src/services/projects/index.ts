import type { ProjectsService } from '../../types'
import { MockProjectsService } from './mockService'
import { RealProjectsService } from './realService'

const useMock = import.meta.env.VITE_USE_MOCK_API === 'true'

export const projectsService: ProjectsService = useMock
  ? new MockProjectsService()
  : new RealProjectsService()
