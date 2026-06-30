import type { Project } from '../../../types'

interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
}

const categoryColors: Record<string, string> = {
  SaaS: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
  'E-Commerce': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  HealthTech: 'text-rose-400 bg-rose-400/10 border-rose-400/20',
  DevTools: 'text-sky-400 bg-sky-400/10 border-sky-400/20',
  FinTech: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
}

const categoryGradients: Record<string, string> = {
  SaaS: 'from-violet-900/60 to-violet-950/80',
  'E-Commerce': 'from-emerald-900/60 to-emerald-950/80',
  HealthTech: 'from-rose-900/60 to-rose-950/80',
  DevTools: 'from-sky-900/60 to-sky-950/80',
  FinTech: 'from-amber-900/60 to-amber-950/80',
}

function getCategoryColor(category: string): string {
  const key = Object.keys(categoryColors).find(k => category.includes(k))
  return key ? categoryColors[key] : 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20'
}

function getCategoryGradient(category: string): string {
  const key = Object.keys(categoryGradients).find(k => category.includes(k))
  return key ? categoryGradients[key] : 'from-indigo-900/60 to-indigo-950/80'
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <button
      className="glass-card rounded-2xl text-left w-full h-full cursor-pointer overflow-hidden
        transition-all duration-300 ease-out group
        hover:-translate-y-2 hover:border-indigo-500/30
        hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)]
        focus-visible:outline-2 focus-visible:outline-indigo-500 focus-visible:outline-offset-2"
      onClick={() => onSelect(project)}
    >
      {/* Thumbnail */}
      <div className="relative w-full overflow-hidden" style={{ height: '180px' }}>
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={`Vista previa de ${project.name}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${getCategoryGradient(project.category)}`} />
        )}
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {/* Category badge over image */}
        <div className="absolute top-3 left-3">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full border backdrop-blur-sm ${getCategoryColor(project.category)}`}>
            {project.category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="text-slate-400 text-xs font-mono bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md">
            {project.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-indigo-300 transition-colors duration-200">
          {project.name}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map(t => (
            <span
              key={t}
              className="text-xs text-slate-500 bg-slate-800/60 border border-slate-700/50 px-2 py-0.5 rounded-md font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium
          group-hover:gap-3 transition-all duration-200">
          <span>Ver capturas</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </button>
  )
}
