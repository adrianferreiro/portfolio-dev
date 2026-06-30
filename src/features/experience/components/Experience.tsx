import { AnimateIn } from '../../../shared/components/AnimateIn'

interface Job {
  id: string
  company: string
  client?: string
  role: string
  period: string
  current?: boolean
  type: string
  description: string
  tech: string[]
  highlights: string[]
}

const JOBS: Job[] = [
  {
    id: 'zafirus',
    company: 'ZAFIRUS',
    client: 'CrediClub · México',
    role: 'Flutter Developer — Squad de Tarjetas',
    period: 'Ago 2025 – Jun 2026',
    type: 'Software Factory · Fintech',
    description:
      'Desarrollo mobile en una Software Factory prestando servicios para el ecosistema financiero de CrediClub. Colaboración remota en entorno internacional.',
    tech: ['Flutter', 'Dart', 'Clean Architecture', 'SOLID', 'Scrum', 'Jira', 'Fastlane'],
    highlights: [
      'Desarrollo de flujos críticos de gestión de tarjetas de crédito/débito (físicas y digitales).',
      'Implementación de autenticación OTP y módulos de transferencias bancarias.',
      'Configuración de múltiples flavors (Dev / QA / Prod) y publicación automática en Play Store y App Store.',
      'Productividad con IA: Amazon Q y Claude integrados al flujo de trabajo diario.',
    ],
  },
  {
    id: 'poderjudicial',
    company: 'Poder Judicial de Formosa',
    role: 'Desarrollador de Aplicaciones Móviles',
    period: 'Nov 2021 – Actualidad',
    current: true,
    type: 'Sector Público',
    description:
      'Área de Desarrollo de Sistemas. Diseño, desarrollo y publicación de aplicaciones móviles y sistemas web para el Poder Judicial de la Provincia de Formosa.',
    tech: ['Flutter', 'Dart', 'Firebase', 'React', 'Node.js', 'Laravel', 'PHP', 'MySQL', 'GitHub'],
    highlights: [
      'Desarrollo y publicación de e-justicia en Google Play Store y App Store.',
      'Arquitecturas MVVM y Clean Architecture en todos los proyectos.',
      'Integración con Firebase: autenticación, push notifications, deep links.',
      'Backend con Node.js y Laravel, bases de datos MySQL.',
      'CI/CD automatizado con GitHub Actions. Gestión de versiones con GitFlow.',
    ],
  },
]

const EDUCATION = [
  { title: 'Analista en Sistemas de la Información', institution: 'Inst. Robustiano Macedo Martínez', year: '2011 – 2013' },
  { title: 'Analista Programador', institution: 'Inst. Robustiano Macedo Martínez', year: '2007 – 2010' },
  { title: 'Flutter: Desarrollo avanzado para móviles', institution: 'Udemy', year: '' },
  { title: 'Principios SOLID y Clean Code', institution: 'Udemy', year: '' },
  { title: 'Patrones de Diseño', institution: 'DevTalles', year: '' },
  { title: 'React · Node.js', institution: 'Udemy', year: '' },
]

const IN_PROGRESS = [
  { title: 'Vibe Coding: De forma responsable', institution: 'Udemy · Fernando Herrera' },
  { title: 'Claude Code: Guía completa para desarrolladores', institution: 'DevTalles · Fernando Herrera' },
]

export function Experience() {
  return (
    <section id="experience" className="mt-24">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-12">
        <div className="flex items-center gap-2.5 shrink-0">
          <span className="w-2 h-2 rounded-full bg-violet-400" />
          <h3 className="text-slate-200 font-semibold text-lg">Experiencia</h3>
        </div>
        <div className="flex-1 h-px" style={{ background: 'rgba(99,102,241,0.1)' }} />
      </div>

      {/* Timeline */}
      <div className="relative">
        <div
          className="absolute left-[7px] top-3 bottom-3 w-px hidden sm:block"
          style={{ background: 'rgba(99,102,241,0.15)' }}
        />

        <div className="space-y-6">
          {JOBS.map((job, i) => (
            <AnimateIn key={job.id} delay={i * 120}>
            <div className="flex gap-5 sm:gap-7">
              {/* Timeline dot */}
              <div className="hidden sm:flex flex-col items-center pt-1.5 shrink-0">
                <div className={`w-3.5 h-3.5 rounded-full border-2 ${
                  job.current
                    ? 'bg-violet-500 border-violet-400'
                    : 'bg-slate-700 border-slate-600'
                }`} />
              </div>

              {/* Card */}
              <div className="glass-card rounded-xl p-5 sm:p-6 flex-1 min-w-0">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="text-slate-100 font-semibold text-base">{job.company}</h4>
                      {job.client && (
                        <span className="text-xs text-violet-400 bg-violet-400/10 border border-violet-400/20 px-2 py-0.5 rounded-full">
                          {job.client}
                        </span>
                      )}
                      {job.current && (
                        <span className="text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">
                          Actual
                        </span>
                      )}
                    </div>
                    <p className="text-indigo-300 text-sm font-medium">{job.role}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-slate-500 text-xs font-mono">{job.period}</p>
                    <p className="text-slate-600 text-xs mt-0.5">{job.type}</p>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">{job.description}</p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-4">
                  {job.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2.5 text-slate-400 text-sm">
                      <span className="text-indigo-500 mt-1 shrink-0">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-indigo-500/10">
                  {job.tech.map(t => (
                    <span
                      key={t}
                      className="text-xs text-slate-500 bg-slate-800/60 border border-slate-700/50 px-2 py-0.5 rounded-md font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      {/* Education */}
      <AnimateIn direction="fade" delay={100}>
      <div className="mt-14 grid md:grid-cols-2 gap-8">
        {/* Formal + courses */}
        <div>
          <h4 className="text-slate-400 text-xs font-mono uppercase tracking-widest mb-4">Formación</h4>
          <div className="space-y-3">
            {EDUCATION.map((e, i) => (
              <div key={i} className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-slate-300 text-sm">{e.title}</p>
                  <p className="text-slate-600 text-xs mt-0.5">{e.institution}</p>
                </div>
                {e.year && <p className="text-slate-600 text-xs font-mono shrink-0">{e.year}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* In progress */}
        <div>
          <h4 className="text-slate-400 text-xs font-mono uppercase tracking-widest mb-4">
            En curso
            <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </h4>
          <div className="space-y-3">
            {IN_PROGRESS.map((e, i) => (
              <div key={i} className="glass-card rounded-lg px-4 py-3">
                <p className="text-slate-300 text-sm">{e.title}</p>
                <p className="text-slate-600 text-xs mt-0.5">{e.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </AnimateIn>
    </section>
  )
}
