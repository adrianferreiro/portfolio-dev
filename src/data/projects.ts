import type { Project, Screenshot } from '../types'

export const PROJECTS: Project[] = [
  {
    id: 'crediclub',
    name: 'Crediclub',
    description:
      'Aplicación fintech de méxico. Permite a los usuarios solicitar préstamos, realizar pagos, transferencias, inversiones. ',
    tech: ['Flutter'],
    category: 'FinTech · iOS & Android',
    year: 2026,
    thumbnail: 'https://www.appedir.net/portfolio-images/crediclub/thumbnail.jpeg',
  },
  {
    id: 'vetado',
    name: 'Vetado',
    description:
      'App social con chat grupal en tiempo real, notificaciones push y monetización con video recompensado y anuncios nativos. Backend propio en VPS con WebSockets.',
    tech: ['Flutter', 'Laravel 13', 'WebSocket', 'FCM', 'AdMob', 'MySQL', 'Nginx'],
    category: 'Social · iOS & Android',
    year: 2026,
    thumbnail: 'https://www.appedir.net/portfolio-images/vetado/thumbnail.png',
  },
  {
    id: 'ejusticia',
    name: 'e-justicia',
    description:
      'App oficial del Poder Judicial de la Provincia de Formosa para consulta de expedientes, notificaciones judiciales y acceso a servicios del sistema de justicia.',
    tech: ['Flutter', 'Dart', 'Firebase', 'REST API', 'Push Notifications'],
    category: 'GovTech · iOS & Android',
    year: 2022,
    thumbnail: 'https://www.appedir.net/portfolio-images/e-justicia/thumbnail.png',
  },
  {
    id: 'dentapp',
    name: 'Dentapp',
    description:
      'Herramienta de gestión integral para consultorios odontológicos: pacientes, agenda, cobros, gastos y estadísticas financieras del consultorio.',
    tech: ['Flutter', 'Dart', 'Laravel', 'MySQL', 'REST API'],
    category: 'HealthTech · Android',
    year: 2023,
    thumbnail: 'https://www.appedir.net/portfolio-images/dentapp/thumbnail.png',
  },
  {
    id: 'pictionary2',
    name: 'Pictionary2',
    description:
      'Juego de entretenimiento multijugador estilo Pictionary con publicación automática de versiones en Google Play Store y App Store mediante Fastlane y GitHub Actions.',
    tech: ['Flutter', 'Dart', 'Fastlane', 'GitHub Actions', 'WebSocket'],
    category: 'Gaming · iOS & Android',
    year: 2020,
    thumbnail: 'https://www.appedir.net/portfolio-images/pictionary2/thumbnail.png',
  },
  {
    id: 'analiticaf',
    name: 'Analítica F',
    description:
      'Aplicación para gestión de encuestas, carga de datos en campo y análisis estadístico para el ámbito político. Publicada en Google Play Store.',
    tech: ['Flutter', 'Dart', 'Laravel', 'MySQL', 'Charts'],
    category: 'Analytics · Android',
    year: 2020,
    thumbnail: 'https://www.appedir.net/portfolio-images/analitica_f/thumbnail.png',
  },
]

export const SCREENSHOTS: Record<string, Screenshot[]> = {
  crediclub: [
    { id: 'vt-1', url: 'https://www.appedir.net/portfolio-images/crediclub/000.png', caption: '' },
    { id: 'vt-2', url: 'https://www.appedir.net/portfolio-images/crediclub/001.png', caption: '' },
    { id: 'vt-3', url: 'https://www.appedir.net/portfolio-images/crediclub/002.png', caption: '' },
    { id: 'vt-4', url: 'https://www.appedir.net/portfolio-images/crediclub/003.png', caption: '' },
    { id: 'vt-5', url: 'https://www.appedir.net/portfolio-images/crediclub/004.png', caption: '' },
    { id: 'vt-6', url: 'https://www.appedir.net/portfolio-images/crediclub/005.png', caption: '' },
    { id: 'vt-7', url: 'https://www.appedir.net/portfolio-images/crediclub/006.png', caption: '' },
  ],
  vetado: [
    { id: 'vt-1', url: 'https://www.appedir.net/portfolio-images/vetado/000.png', caption: '' },
    { id: 'vt-2', url: 'https://www.appedir.net/portfolio-images/vetado/001.png', caption: '' },
    { id: 'vt-3', url: 'https://www.appedir.net/portfolio-images/vetado/002.png', caption: '' },
    { id: 'vt-4', url: 'https://www.appedir.net/portfolio-images/vetado/003.png', caption: '' },
  ],
  ejusticia: [
    { id: 'ej-1', url: 'https://www.appedir.net/portfolio-images/e-justicia/000.png', caption: '' },
    { id: 'ej-2', url: 'https://www.appedir.net/portfolio-images/e-justicia/001.png', caption: '' },
    { id: 'ej-3', url: 'https://www.appedir.net/portfolio-images/e-justicia/002.png', caption: '' },
    { id: 'ej-4', url: 'https://www.appedir.net/portfolio-images/e-justicia/003.png', caption: '' },
  ],
  dentapp: [
    { id: 'da-1', url: 'https://www.appedir.net/portfolio-images/dentapp/000.png', caption: '' },
    { id: 'da-2', url: 'https://www.appedir.net/portfolio-images/dentapp/001.png', caption: '' },
    { id: 'da-3', url: 'https://www.appedir.net/portfolio-images/dentapp/002.png', caption: '' },
    { id: 'da-4', url: 'https://www.appedir.net/portfolio-images/dentapp/003.png', caption: '' },
    { id: 'da-4', url: 'https://www.appedir.net/portfolio-images/dentapp/004.png', caption: '' },
  ],
  pictionary2: [
    { id: 'pi-1', url: 'https://www.appedir.net/portfolio-images/pictionary2/000.png', caption: '' },
    { id: 'pi-2', url: 'https://www.appedir.net/portfolio-images/pictionary2/001.png', caption: '' },
    { id: 'pi-3', url: 'https://www.appedir.net/portfolio-images/pictionary2/002.png', caption: '' },
    { id: 'pi-4', url: 'https://www.appedir.net/portfolio-images/pictionary2/003.png', caption: '' },
    { id: 'pi-5', url: 'https://www.appedir.net/portfolio-images/pictionary2/004.png', caption: '' },
  ],

}
