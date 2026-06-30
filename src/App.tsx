import { useState } from 'react'
import type { Project } from './types'
import { ProjectGrid } from './features/projects/components/ProjectGrid'
import { ScreenshotGallery } from './features/projects/components/ScreenshotGallery'
import { OtherTech } from './features/other-tech/components/OtherTech'
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
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <p className="text-slate-100 text-lg font-bold tracking-tight">Adrian Ferreiro</p>
            <p className="text-slate-500 text-sm mt-0.5">Flutter Developer · Full Stack</p>
          </div>
          <nav className="flex gap-6 text-sm text-slate-400">
            <a href="#projects" className="hover:text-slate-200 transition-colors">Proyectos</a>
            <a href="#other-tech" className="hover:text-slate-200 transition-colors">Otras tecnologías</a>
          </nav>
        </div>
      </header>

      <main className="relative max-w-6xl mx-auto px-6 py-16 pb-24">
        {/* Hero */}
        <div className="mb-16 animate-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-medium px-3 py-1 rounded-full border text-sky-400 bg-sky-400/10 border-sky-400/20">
              Flutter Developer
            </span>
            <span className="text-slate-600 text-sm">iOS · Android · Cross-platform</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 leading-tight mb-5">
            Apps mobile que combinan<br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #38bdf8, #818cf8)' }}
            >
              diseño y rendimiento
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            Desarrollo aplicaciones Flutter para iOS y Android, con backends en Laravel y Node.js,
            y experiencia full stack para llevar una idea de cero a producción.
          </p>
        </div>

        {/* Flutter projects */}
        <section id="projects">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <h3 className="text-slate-200 font-semibold text-lg">Proyectos Flutter</h3>
            </div>
            <div className="flex-1 h-px" style={{ background: 'rgba(99,102,241,0.1)' }} />
          </div>
          <ProjectGrid onSelectProject={setSelectedProject} />
        </section>

        {/* Other tech */}
        <OtherTech />
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
