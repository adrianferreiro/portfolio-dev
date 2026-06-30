import { useState } from 'react'
import type { Project } from './types'
import { ProjectGrid } from './features/projects/components/ProjectGrid'
import { ScreenshotGallery } from './features/projects/components/ScreenshotGallery'
import { Modal } from './shared/components/Modal'
import './App.css'

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="min-h-screen text-slate-100" style={{ background: '#050816' }}>
      {/* Background radial glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.12) 0%, transparent 60%)',
        }}
      />

      {/* Header */}
      <header className="relative border-b border-indigo-500/10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-100">
              {'<'}<span className="text-indigo-400">Dev</span>{' />'}
            </h1>
            <p className="text-slate-500 text-sm mt-0.5">Full Stack Developer</p>
          </div>
          <nav className="flex gap-6 text-sm text-slate-400">
            <a href="#projects" className="hover:text-slate-200 transition-colors">Proyectos</a>
          </nav>
        </div>
      </header>

      <main className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Hero text */}
        <div className="mb-16 animate-slide-up">
          <p className="text-indigo-400 text-sm font-mono mb-3 tracking-widest uppercase">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 leading-tight mb-4">
            Proyectos que<br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #818cf8, #c084fc)' }}
            >
              resuelven problemas reales
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            Aplicaciones full stack con foco en performance, UX y arquitecturas escalables.
          </p>
        </div>

        {/* Projects section */}
        <section id="projects">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-slate-200 font-semibold text-lg">Trabajos recientes</h3>
            <div className="flex-1 h-px" style={{ background: 'rgba(99,102,241,0.1)' }} />
          </div>
          <ProjectGrid onSelectProject={setSelectedProject} />
        </section>
      </main>

      {/* Screenshot modal */}
      {selectedProject && (
        <Modal onClose={() => setSelectedProject(null)}>
          <ScreenshotGallery
            projectId={selectedProject.id}
            projectName={selectedProject.name}
            onClose={() => setSelectedProject(null)}
          />
        </Modal>
      )}
    </div>
  )
}
