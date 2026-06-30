import { useState, useEffect, useCallback } from 'react'
import type { Project } from '../../../types'
import { useProjectScreenshots } from '../hooks/useProjectScreenshots'
import { Spinner } from '../../../shared/components/Spinner'

interface ScreenshotGalleryProps {
  project: Project
  onClose: () => void
}

export function ScreenshotGallery({ project, onClose }: ScreenshotGalleryProps) {
  const { screenshots, loading, error } = useProjectScreenshots(project.id)
  const [current, setCurrent] = useState(0)
  const [imgLoaded, setImgLoaded] = useState(false)

  const prev = useCallback(() => setCurrent(i => (i - 1 + screenshots.length) % screenshots.length), [screenshots.length])
  const next = useCallback(() => setCurrent(i => (i + 1) % screenshots.length), [screenshots.length])

  useEffect(() => { setCurrent(0) }, [project.id])

  useEffect(() => { setImgLoaded(false) }, [current])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [prev, next])

  return (
    <div
      className="flex flex-col md:flex-row rounded-2xl overflow-hidden max-h-[90vh]"
      style={{ background: 'rgba(8, 10, 30, 0.97)', border: '1px solid rgba(129, 140, 248, 0.2)' }}
    >
      {/* ── Left panel: project info ── */}
      <div className="md:w-72 lg:w-80 shrink-0 flex flex-col border-b md:border-b-0 md:border-r border-indigo-500/10 overflow-y-auto">
        <div className="p-5 flex-1">
          {/* Close button (mobile top-right) */}
          <div className="flex items-start justify-between gap-3 mb-4 md:hidden">
            <span className="text-xs text-slate-500 border border-slate-700/50 px-2.5 py-1 rounded-full">
              {project.category}
            </span>
            <button
              onClick={onClose}
              className="text-slate-500 hover:text-slate-200 transition-colors p-1 rounded-lg hover:bg-white/5 shrink-0"
              aria-label="Cerrar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Category + year (desktop) */}
          <div className="hidden md:flex items-center justify-between mb-4">
            <span className="text-xs text-slate-500 border border-slate-700/50 px-2.5 py-1 rounded-full">
              {project.category}
            </span>
            <span className="text-slate-600 text-xs font-mono">{project.year}</span>
          </div>

          <h2 className="text-xl font-bold text-slate-100 mb-3 leading-snug">{project.name}</h2>

          <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

          <div className="flex flex-wrap gap-1.5">
            {project.tech.map(t => (
              <span
                key={t}
                className="text-xs text-slate-500 bg-slate-800/60 border border-slate-700/50 px-2 py-0.5 rounded-md font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Counter (desktop bottom) */}
        {screenshots.length > 0 && (
          <div className="hidden md:flex items-center justify-between px-5 py-3 border-t border-indigo-500/10">
            <p className="text-slate-600 text-xs">
              {current + 1} / {screenshots.length} capturas
            </p>
            <button
              onClick={onClose}
              className="text-slate-500 hover:text-slate-200 transition-colors p-1.5 rounded-lg hover:bg-white/5"
              aria-label="Cerrar"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* ── Right panel: gallery ── */}
      <div className="flex-1 flex flex-col min-w-0 min-h-0">
        {loading && (
          <div className="flex justify-center items-center flex-1 h-64">
            <Spinner size="lg" />
          </div>
        )}

        {error && (
          <div className="flex justify-center items-center flex-1 h-64">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {!loading && !error && screenshots.length === 0 && (
          <div className="flex justify-center items-center flex-1 h-64">
            <p className="text-slate-500 text-sm">No hay capturas disponibles.</p>
          </div>
        )}

        {!loading && screenshots.length > 0 && (
          <>
            {/* Main image */}
            <div className="relative group/img bg-black/40 flex-1 min-h-0" style={{ minHeight: '300px' }}>
              {!imgLoaded && (
                <div className="absolute inset-0 flex items-center justify-center img-shimmer">
                  <Spinner size="lg" />
                </div>
              )}
              <img
                key={screenshots[current].id}
                src={screenshots[current].url}
                alt={screenshots[current].caption ?? `Captura ${current + 1}`}
                onLoad={() => setImgLoaded(true)}
                className={`w-full h-full object-contain transition-opacity duration-300
                  ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
              />

              {screenshots.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full
                      bg-black/50 text-white/70 hover:text-white hover:bg-black/80
                      opacity-0 group-hover/img:opacity-100 transition-all duration-200"
                    aria-label="Anterior"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full
                      bg-black/50 text-white/70 hover:text-white hover:bg-black/80
                      opacity-0 group-hover/img:opacity-100 transition-all duration-200"
                    aria-label="Siguiente"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {screenshots[current].caption && (
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-4">
                  <p className="text-slate-300 text-sm">{screenshots[current].caption}</p>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {screenshots.length > 1 && (
              <div
                className="flex gap-2 p-3 overflow-x-auto border-t border-indigo-500/10 shrink-0"
                style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(99,102,241,0.3) transparent' }}
              >
                {screenshots.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrent(i)}
                    className={`flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200 ${
                      i === current ? 'ring-2 ring-indigo-500 opacity-100' : 'opacity-40 hover:opacity-70'
                    }`}
                    style={{ width: 64, height: 40 }}
                    aria-label={`Ir a captura ${i + 1}`}
                  >
                    <img src={s.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
