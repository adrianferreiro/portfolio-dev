import type { Project } from '../../../types'

interface ProjectCardProps {
  project: Project
  index: number
  onSelect: (project: Project) => void
}

const categoryColors: Record<string, string> = {
  SaaS: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
  'E-Commerce': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  HealthTech: 'text-rose-400 bg-rose-400/10 border-rose-400/20',
  DevTools: 'text-sky-400 bg-sky-400/10 border-sky-400/20',
  FinTech: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
}

function getCategoryColor(category: string): string {
  const key = Object.keys(categoryColors).find(k => category.includes(k))
  return key ? categoryColors[key] : 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20'
}

export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  return (
    <button
      className="glass-card animate-slide-up rounded-2xl p-6 text-left w-full cursor-pointer
        transition-all duration-300 ease-out group
        hover:-translate-y-2 hover:border-indigo-500/30
        hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)]
        focus-visible:outline-2 focus-visible:outline-indigo-500 focus-visible:outline-offset-2"
      style={{ animationDelay: `${index * 0.08}s` }}
      onClick={() => onSelect(project)}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full border ${getCategoryColor(project.category)}`}
        >
          {project.category}
        </span>
        <span className="text-slate-600 text-sm font-mono">{project.year}</span>
      </div>

      <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-indigo-300 transition-colors duration-200">
        {project.name}
      </h3>

      <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map(t => (
          <span
            key={t}
            className="text-xs text-slate-500 bg-slate-800/60 border border-slate-700/50 px-2.5 py-1 rounded-md font-mono"
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
    </button>
  )
}
