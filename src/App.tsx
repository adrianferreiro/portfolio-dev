import { useState } from 'react'
import type { Project } from './types'
import { ProjectGrid } from './features/projects/components/ProjectGrid'
import { ScreenshotGallery } from './features/projects/components/ScreenshotGallery'
import { Experience } from './features/experience/components/Experience'
import { OtherTech } from './features/other-tech/components/OtherTech'
import { Contact } from './features/contact/components/Contact'
import { Modal } from './shared/components/Modal'
import './App.css'

const NAV_LINKS = [
  { href: '#experience', label: 'Experiencia' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#other-tech', label: 'Otras tecnologías' },
  { href: '#contact', label: 'Contacto' },
]

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMenu = () => setMobileMenuOpen(false)

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
      <header className="relative border-b border-indigo-500/10 sticky top-0 z-40"
        style={{ background: 'rgba(5, 8, 22, 0.85)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-slate-100 text-lg font-bold tracking-tight">Adrian Ferreiro</p>
            <p className="text-slate-500 text-sm mt-0.5">Flutter Developer · Full Stack</p>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 text-sm text-slate-400">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="hover:text-slate-200 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Hamburger button */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-slate-200 transition-colors rounded-lg hover:bg-white/5"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav
            className="md:hidden border-t border-indigo-500/10 animate-fade-in"
            style={{ background: 'rgba(5, 8, 22, 0.95)' }}
          >
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center px-6 py-4 text-slate-400 hover:text-slate-200
                  hover:bg-white/5 transition-colors border-b border-indigo-500/5 text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pb-24">
        {/* Hero */}
        <div className="mb-16 animate-slide-up">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono font-medium px-3 py-1 rounded-full border text-sky-400 bg-sky-400/10 border-sky-400/20">
              Flutter Developer
            </span>
            <span className="text-slate-600 text-sm">iOS · Android · Cross-platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 leading-tight mb-5">
            Apps mobile que combinan<br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #38bdf8, #818cf8)' }}
            >
              diseño y rendimiento
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
            Desarrollo aplicaciones Flutter para iOS y Android, con backends en Laravel y Node.js,
            y experiencia full stack para llevar una idea de cero a producción.
          </p>
        </div>

        {/* Experience */}
        <Experience />

        {/* Flutter projects */}
        <section id="projects">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2.5 shrink-0">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <h3 className="text-slate-200 font-semibold text-lg">Proyectos Flutter</h3>
            </div>
            <div className="flex-1 h-px" style={{ background: 'rgba(99,102,241,0.1)' }} />
          </div>
          <ProjectGrid onSelectProject={setSelectedProject} />
        </section>

        {/* Other tech */}
        <OtherTech />

        {/* Contact */}
        <Contact />
      </main>

      <footer className="relative border-t border-indigo-500/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} Adrian Ferreiro</p>
          <p className="text-slate-700 text-xs font-mono">Flutter Developer · Full Stack</p>
        </div>
      </footer>

      {/* Screenshot modal */}
      {selectedProject && (
        <Modal onClose={() => setSelectedProject(null)}>
          <ScreenshotGallery
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </Modal>
      )}
    </div>
  )
}
