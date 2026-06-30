import type { Project, Screenshot, ProjectsService } from '../../types'

const MOCK_PROJECTS: Project[] = [
  {
    id: 'fintrack',
    name: 'FinTrack Pro',
    description:
      'Plataforma SaaS de gestión financiera personal con análisis de gastos en tiempo real, proyecciones automatizadas y reportes exportables.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'Redis'],
    category: 'SaaS · Finanzas',
    year: 2024,
  },
  {
    id: 'shopwave',
    name: 'ShopWave',
    description:
      'E-commerce de alta performance con gestión de inventario multialmacén, pagos con Stripe, panel de analytics y notificaciones push.',
    tech: ['Next.js', 'Stripe', 'MongoDB', 'Redis', 'Docker'],
    category: 'E-Commerce',
    year: 2024,
  },
  {
    id: 'taskflow',
    name: 'TaskFlow',
    description:
      'Herramienta de gestión de proyectos con tablero Kanban, tracking de tiempo, colaboración en tiempo real y reportes de productividad.',
    tech: ['Vue.js', 'FastAPI', 'PostgreSQL', 'WebSocket', 'Celery'],
    category: 'SaaS · Productividad',
    year: 2023,
  },
  {
    id: 'mediconnect',
    name: 'MediConnect',
    description:
      'Plataforma de telemedicina con agenda de turnos inteligente, videoconsultas integradas y gestión de historias clínicas digitales.',
    tech: ['React Native', 'Express', 'MySQL', 'WebRTC', 'AWS S3'],
    category: 'HealthTech · Mobile',
    year: 2023,
  },
  {
    id: 'devmetrics',
    name: 'DevMetrics',
    description:
      'Dashboard de analytics para equipos de desarrollo con integración a GitHub, Jira y CI/CD pipelines, con métricas DORA en tiempo real.',
    tech: ['React', 'D3.js', 'Python', 'FastAPI', 'Docker', 'Go'],
    category: 'DevTools',
    year: 2024,
  },
  {
    id: 'cryptowatch',
    name: 'CryptoWatch',
    description:
      'Terminal de trading con feeds de precios en tiempo real vía WebSocket, alertas configurables, backtesting y portfolio tracker.',
    tech: ['React', 'Go', 'WebSocket', 'TimescaleDB', 'Redis'],
    category: 'FinTech · Trading',
    year: 2024,
  },
]

const MOCK_SCREENSHOTS: Record<string, Screenshot[]> = {
  fintrack: [
    { id: 'ft-1', url: 'https://picsum.photos/seed/fintrack-dash/1280/720', caption: 'Dashboard principal con resumen financiero' },
    { id: 'ft-2', url: 'https://picsum.photos/seed/fintrack-chart/1280/720', caption: 'Gráficos de gastos por categoría' },
    { id: 'ft-3', url: 'https://picsum.photos/seed/fintrack-report/1280/720', caption: 'Reportes exportables en PDF y Excel' },
    { id: 'ft-4', url: 'https://picsum.photos/seed/fintrack-mobile/1280/720', caption: 'Vista mobile responsive' },
  ],
  shopwave: [
    { id: 'sw-1', url: 'https://picsum.photos/seed/shopwave-home/1280/720', caption: 'Home con productos destacados' },
    { id: 'sw-2', url: 'https://picsum.photos/seed/shopwave-admin/1280/720', caption: 'Panel de administración de inventario' },
    { id: 'sw-3', url: 'https://picsum.photos/seed/shopwave-checkout/1280/720', caption: 'Flujo de checkout con Stripe' },
    { id: 'sw-4', url: 'https://picsum.photos/seed/shopwave-analytics/1280/720', caption: 'Analytics de ventas y conversiones' },
    { id: 'sw-5', url: 'https://picsum.photos/seed/shopwave-orders/1280/720', caption: 'Gestión de órdenes y envíos' },
  ],
  taskflow: [
    { id: 'tf-1', url: 'https://picsum.photos/seed/taskflow-board/1280/720', caption: 'Tablero Kanban con drag & drop' },
    { id: 'tf-2', url: 'https://picsum.photos/seed/taskflow-timeline/1280/720', caption: 'Vista de timeline / Gantt' },
    { id: 'tf-3', url: 'https://picsum.photos/seed/taskflow-reports/1280/720', caption: 'Reportes de productividad del equipo' },
    { id: 'tf-4', url: 'https://picsum.photos/seed/taskflow-timer/1280/720', caption: 'Tracker de tiempo por tarea' },
  ],
  mediconnect: [
    { id: 'mc-1', url: 'https://picsum.photos/seed/medi-agenda/1280/720', caption: 'Agenda de turnos del médico' },
    { id: 'mc-2', url: 'https://picsum.photos/seed/medi-video/1280/720', caption: 'Videoconsulta en tiempo real' },
    { id: 'mc-3', url: 'https://picsum.photos/seed/medi-historia/1280/720', caption: 'Historia clínica digital del paciente' },
    { id: 'mc-4', url: 'https://picsum.photos/seed/medi-app/1280/720', caption: 'App mobile para pacientes' },
    { id: 'mc-5', url: 'https://picsum.photos/seed/medi-dash/1280/720', caption: 'Dashboard del profesional' },
  ],
  devmetrics: [
    { id: 'dm-1', url: 'https://picsum.photos/seed/devmetrics-dora/1280/720', caption: 'Métricas DORA del equipo' },
    { id: 'dm-2', url: 'https://picsum.photos/seed/devmetrics-github/1280/720', caption: 'Integración con GitHub — PRs y reviews' },
    { id: 'dm-3', url: 'https://picsum.photos/seed/devmetrics-pipeline/1280/720', caption: 'Estado de pipelines CI/CD' },
    { id: 'dm-4', url: 'https://picsum.photos/seed/devmetrics-team/1280/720', caption: 'Performance por desarrollador' },
  ],
  cryptowatch: [
    { id: 'cw-1', url: 'https://picsum.photos/seed/crypto-terminal/1280/720', caption: 'Terminal de trading con orderbook' },
    { id: 'cw-2', url: 'https://picsum.photos/seed/crypto-portfolio/1280/720', caption: 'Portfolio tracker con P&L' },
    { id: 'cw-3', url: 'https://picsum.photos/seed/crypto-alerts/1280/720', caption: 'Sistema de alertas configurables' },
    { id: 'cw-4', url: 'https://picsum.photos/seed/crypto-backtest/1280/720', caption: 'Motor de backtesting de estrategias' },
    { id: 'cw-5', url: 'https://picsum.photos/seed/crypto-charts/1280/720', caption: 'Charts con indicadores técnicos' },
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
