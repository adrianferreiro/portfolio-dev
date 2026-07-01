import { AnimateIn } from '../../../shared/components/AnimateIn'

interface TechItem {
  id: string
  name: string
  accent: string
  border: string
  description: string
  projects: string[]
}

const TECH_ITEMS: TechItem[] = [
  {
    id: 'laravel',
    name: 'Laravel · PHP',
    accent: 'text-rose-400',
    border: 'border-rose-500/20',
    description: 'APIs REST, paneles administrativos y sistemas backend con autenticación, y Eloquent ORM.',
    projects: ['API REST para apps móviles', 'Panel de administración SaaS', 'Sistema de facturación'],
  },
  {
    id: 'react',
    name: 'React · TypeScript',
    accent: 'text-sky-400',
    border: 'border-sky-500/20',
    description: 'SPAs y dashboards web modernos. Este mismo portfolio está construido con React + Vite + Tailwind.',
    projects: ['Plataforma de solicitud de tarjetas de crédito', 'Este portfolio', 'App de gestión interna'],
  },
  {
    id: 'nodejs',
    name: 'Node.js · Express',
    accent: 'text-emerald-400',
    border: 'border-emerald-500/20',
    description: 'Backends, APIs en tiempo real con WebSocket y servicios de integración para apps Flutter.',
    projects: ['WebSocket server de chat', 'API de notificaciones push', 'Servicio de pagos'],
  },
  {
    id: 'sql',
    name: 'MySQL',
    accent: 'text-amber-400',
    border: 'border-amber-500/20',
    description: 'Modelado de bases de datos relacionales, migraciones, optimización de queries y diseño de esquemas.',
    projects: ['Modelado', 'Optimización', 'Migraciones'],
  },
]

export function OtherTech() {
  return (
    <section id="other-tech" className="mt-24">
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-slate-200 font-semibold text-lg whitespace-nowrap">También trabajo con</h3>
        <div className="flex-1 h-px" style={{ background: 'rgba(99,102,241,0.1)' }} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {TECH_ITEMS.map((item, i) => (
          <AnimateIn key={item.id} delay={i * 70}>
          <div className={`glass-card rounded-xl p-5 border-t-2 ${item.border}`}>
            <p className={`text-sm font-semibold font-mono mb-3 ${item.accent}`}>{item.name}</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>
            <ul className="space-y-1">
              {item.projects.map(p => (
                <li key={p} className="flex items-center gap-2 text-slate-500 text-xs">
                  <span className={`w-1 h-1 rounded-full flex-shrink-0 bg-current ${item.accent}`} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}
