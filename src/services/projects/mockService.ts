import type { Project, Screenshot, ProjectsService } from '../../types'

const MOCK_PROJECTS: Project[] = [
  {
    id: 'vetado',
    name: 'Vetado',
    description:
      'App social con chat grupal en tiempo real, sistema de votaciones, notificaciones push y monetización con video recompensado y anuncios nativos. Backend propio en VPS con WebSockets.',
    tech: ['Flutter', 'Laravel 13', 'WebSocket', 'FCM', 'AdMob', 'MySQL', 'Nginx'],
    category: 'Social · iOS & Android',
    year: 2024,
    thumbnail: 'https://picsum.photos/seed/vetado-thumb/800/450',
  },
  {
    id: 'ejusticia',
    name: 'e-justicia',
    description:
      'App oficial del Poder Judicial de la Provincia de Formosa para consulta de expedientes, notificaciones judiciales y acceso a servicios del sistema de justicia.',
    tech: ['Flutter', 'Dart', 'Firebase', 'REST API', 'Push Notifications'],
    category: 'GovTech · iOS & Android',
    year: 2022,
    thumbnail: 'https://picsum.photos/seed/ejusticia-thumb/800/450',
  },
  {
    id: 'dentapp',
    name: 'Dentapp',
    description:
      'Herramienta de gestión integral para consultorios odontológicos: pacientes, agenda, cobros, gastos y estadísticas financieras del consultorio.',
    tech: ['Flutter', 'Dart', 'Node.js', 'MySQL', 'REST API'],
    category: 'HealthTech · Android',
    year: 2023,
    thumbnail: 'https://picsum.photos/seed/dentapp-thumb/800/450',
  },
  {
    id: 'pictionary2',
    name: 'Pictionary2',
    description:
      'Juego de entretenimiento multijugador estilo Pictionary con publicación automática de versiones en Google Play Store y App Store mediante Fastlane y GitHub Actions.',
    tech: ['Flutter', 'Dart', 'Fastlane', 'GitHub Actions', 'WebSocket'],
    category: 'Gaming · iOS & Android',
    year: 2023,
    thumbnail: 'https://picsum.photos/seed/pictionary2-thumb/800/450',
  },
  {
    id: 'analiticaf',
    name: 'Analítica F',
    description:
      'Aplicación para gestión de encuestas, carga de datos en campo y análisis estadístico para el ámbito político. Publicada en Google Play Store.',
    tech: ['Flutter', 'Dart', 'Laravel', 'MySQL', 'Charts'],
    category: 'Analytics · Android',
    year: 2023,
    thumbnail: 'https://picsum.photos/seed/analiticaf-thumb/800/450',
  },
]

const MOCK_SCREENSHOTS: Record<string, Screenshot[]> = {
  vetado: [
    { id: 'vt-1', url: 'https://picsum.photos/seed/vetado-feed/800/1400', caption: 'Feed principal con votaciones en tiempo real' },
    { id: 'vt-2', url: 'https://picsum.photos/seed/vetado-chat/800/1400', caption: 'Chat grupal con WebSockets' },
    { id: 'vt-3', url: 'https://picsum.photos/seed/vetado-vote/800/1400', caption: 'Sistema de votaciones' },
    { id: 'vt-4', url: 'https://picsum.photos/seed/vetado-notif/800/1400', caption: 'Notificaciones push (FCM)' },
    { id: 'vt-5', url: 'https://picsum.photos/seed/vetado-ads/800/1400', caption: 'Integración AdMob — video recompensado' },
  ],
  ejusticia: [
    { id: 'ej-1', url: 'https://picsum.photos/seed/ejusticia-home/800/1400', caption: 'Pantalla principal del ciudadano' },
    { id: 'ej-2', url: 'https://picsum.photos/seed/ejusticia-exp/800/1400', caption: 'Consulta de expedientes judiciales' },
    { id: 'ej-3', url: 'https://picsum.photos/seed/ejusticia-notif/800/1400', caption: 'Notificaciones de novedades en causas' },
    { id: 'ej-4', url: 'https://picsum.photos/seed/ejusticia-docs/800/1400', caption: 'Visualización de documentos judiciales' },
  ],
  dentapp: [
    { id: 'da-1', url: 'https://picsum.photos/seed/dentapp-agenda/800/1400', caption: 'Agenda de turnos y pacientes' },
    { id: 'da-2', url: 'https://picsum.photos/seed/dentapp-paciente/800/1400', caption: 'Ficha de paciente y tratamientos' },
    { id: 'da-3', url: 'https://picsum.photos/seed/dentapp-cobros/800/1400', caption: 'Gestión de cobros y gastos' },
    { id: 'da-4', url: 'https://picsum.photos/seed/dentapp-stats/800/1400', caption: 'Estadísticas financieras del consultorio' },
  ],
  pictionary2: [
    { id: 'pi-1', url: 'https://picsum.photos/seed/pictionary-lobby/800/1400', caption: 'Lobby de partida multijugador' },
    { id: 'pi-2', url: 'https://picsum.photos/seed/pictionary-game/800/1400', caption: 'Pantalla de juego — dibujo en tiempo real' },
    { id: 'pi-3', url: 'https://picsum.photos/seed/pictionary-scores/800/1400', caption: 'Tabla de puntuaciones' },
  ],
  analiticaf: [
    { id: 'af-1', url: 'https://picsum.photos/seed/analitica-encuesta/800/1400', caption: 'Carga de encuesta en campo' },
    { id: 'af-2', url: 'https://picsum.photos/seed/analitica-dash/800/1400', caption: 'Dashboard de resultados estadísticos' },
    { id: 'af-3', url: 'https://picsum.photos/seed/analitica-maps/800/1400', caption: 'Mapa de cobertura geográfica' },
  ],
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export class MockProjectsService implements ProjectsService {
  async getProjects(): Promise<Project[]> {
    await delay(600)
    return MOCK_PROJECTS
  }

  async getProjectScreenshots(projectId: string): Promise<Screenshot[]> {
    await delay(400)
    return MOCK_SCREENSHOTS[projectId] ?? []
  }
}
