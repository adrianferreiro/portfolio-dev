import type { Project, Screenshot, ProjectsService } from '../../types'

const MOCK_PROJECTS: Project[] = [
  {
    id: 'pocketfinance',
    name: 'PocketFinance',
    description:
      'App de finanzas personales con seguimiento de gastos, presupuestos por categoría, estadísticas mensuales y sincronización offline-first.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Riverpod', 'Hive'],
    category: 'Finanzas · iOS & Android',
    year: 2024,
    thumbnail: 'https://picsum.photos/seed/pocketfinance-thumb/800/450',
  },
  {
    id: 'marketgo',
    name: 'MarketGo',
    description:
      'Marketplace mobile con catálogo de productos, carrito, pasarela de pagos y chat en tiempo real entre comprador y vendedor.',
    tech: ['Flutter', 'Dart', 'Node.js', 'Socket.io', 'Stripe'],
    category: 'E-Commerce · iOS & Android',
    year: 2024,
    thumbnail: 'https://picsum.photos/seed/marketgo-thumb/800/450',
  },
  {
    id: 'fittrack',
    name: 'FitTrack',
    description:
      'App de fitness con planes de entrenamiento personalizados, registro de series y repeticiones, progreso semanal y notificaciones de rutina.',
    tech: ['Flutter', 'Dart', 'Laravel', 'SQLite', 'Firebase FCM'],
    category: 'Salud · iOS & Android',
    year: 2023,
    thumbnail: 'https://picsum.photos/seed/fittrack-thumb/800/450',
  },
  {
    id: 'medicita',
    name: 'MediCita',
    description:
      'App de turnos médicos con selector de especialidad y profesional, recordatorios push, videoconsulta integrada e historial de consultas.',
    tech: ['Flutter', 'Dart', 'Laravel', 'WebRTC', 'Firebase'],
    category: 'HealthTech · iOS & Android',
    year: 2023,
    thumbnail: 'https://picsum.photos/seed/medicita-thumb/800/450',
  },
  {
    id: 'quickdeliver',
    name: 'QuickDeliver',
    description:
      'App de delivery con tracking del pedido en mapa en tiempo real, gestión de repartidores, calificaciones y sistema de cupones.',
    tech: ['Flutter', 'Dart', 'Node.js', 'Google Maps SDK', 'WebSocket'],
    category: 'Logística · iOS & Android',
    year: 2024,
    thumbnail: 'https://picsum.photos/seed/quickdeliver-thumb/800/450',
  },
]

const MOCK_SCREENSHOTS: Record<string, Screenshot[]> = {
  pocketfinance: [
    { id: 'pf-1', url: 'https://picsum.photos/seed/pf-home/800/1400', caption: 'Home con resumen del mes y últimas transacciones' },
    { id: 'pf-2', url: 'https://picsum.photos/seed/pf-stats/800/1400', caption: 'Estadísticas por categoría con gráfico de torta' },
    { id: 'pf-3', url: 'https://picsum.photos/seed/pf-budget/800/1400', caption: 'Gestión de presupuestos mensuales' },
    { id: 'pf-4', url: 'https://picsum.photos/seed/pf-add/800/1400', caption: 'Agregar gasto con categorización rápida' },
  ],
  marketgo: [
    { id: 'mg-1', url: 'https://picsum.photos/seed/mg-home/800/1400', caption: 'Home con productos destacados y búsqueda' },
    { id: 'mg-2', url: 'https://picsum.photos/seed/mg-product/800/1400', caption: 'Detalle de producto con galería de imágenes' },
    { id: 'mg-3', url: 'https://picsum.photos/seed/mg-cart/800/1400', caption: 'Carrito y resumen de compra' },
    { id: 'mg-4', url: 'https://picsum.photos/seed/mg-chat/800/1400', caption: 'Chat en tiempo real con el vendedor' },
    { id: 'mg-5', url: 'https://picsum.photos/seed/mg-orders/800/1400', caption: 'Historial de pedidos y estados' },
  ],
  fittrack: [
    { id: 'ft-1', url: 'https://picsum.photos/seed/ft-dashboard/800/1400', caption: 'Dashboard de progreso semanal' },
    { id: 'ft-2', url: 'https://picsum.photos/seed/ft-workout/800/1400', caption: 'Rutina activa con timer y repeticiones' },
    { id: 'ft-3', url: 'https://picsum.photos/seed/ft-plans/800/1400', caption: 'Planes de entrenamiento disponibles' },
    { id: 'ft-4', url: 'https://picsum.photos/seed/ft-history/800/1400', caption: 'Historial y racha de entrenamientos' },
  ],
  medicita: [
    { id: 'mc-1', url: 'https://picsum.photos/seed/mc-home/800/1400', caption: 'Home con próximos turnos' },
    { id: 'mc-2', url: 'https://picsum.photos/seed/mc-search/800/1400', caption: 'Búsqueda de especialidad y profesional' },
    { id: 'mc-3', url: 'https://picsum.photos/seed/mc-booking/800/1400', caption: 'Selección de fecha y hora disponible' },
    { id: 'mc-4', url: 'https://picsum.photos/seed/mc-video/800/1400', caption: 'Videoconsulta en la app' },
    { id: 'mc-5', url: 'https://picsum.photos/seed/mc-history/800/1400', caption: 'Historial de consultas y recetas' },
  ],
  quickdeliver: [
    { id: 'qd-1', url: 'https://picsum.photos/seed/qd-home/800/1400', caption: 'Home con restaurantes y locales cercanos' },
    { id: 'qd-2', url: 'https://picsum.photos/seed/qd-order/800/1400', caption: 'Armar pedido con opciones y extras' },
    { id: 'qd-3', url: 'https://picsum.photos/seed/qd-tracking/800/1400', caption: 'Tracking en mapa del repartidor en tiempo real' },
    { id: 'qd-4', url: 'https://picsum.photos/seed/qd-rating/800/1400', caption: 'Calificación del pedido y el repartidor' },
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
