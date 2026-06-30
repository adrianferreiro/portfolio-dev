import { useState, useEffect, useCallback } from 'react'
import { useProjectScreenshots } from '../hooks/useProjectScreenshots'
import { Spinner } from '../../../shared/components/Spinner'

interface ScreenshotGalleryProps {
  projectId: string
  projectName: string
  onClose: () => void
}

export function ScreenshotGallery({ projectId, projectName, onClose }: ScreenshotGalleryProps) {
  const { screenshots, loading, error } = useProjectScreenshots(projectId)
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => setCurrent(i => (i - 1 + screenshots.length) % screenshots.length), [screenshots.length])
  const next = useCallback(() => setCurrent(i => (i + 1) % screenshots.length), [screenshots.length])

  useEffect(() => {
    setCurrent(0)
  }, [projectId])

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
      className="flex flex-col rounded-2xl overflow-hidden"
      style={{ background: 'rgba(8, 10, 30, 0.95)', border: '1px solid rgba(129, 140, 248, 0.2)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-indigo-500/10">
        <div>
          <h2 className="text-lg font-semibold text-slate-100">{projectName}</h2>
          {screenshots.length > 0 && (
            <p className="text-slate-500 text-sm mt-0.5">
              {current + 1} / {screenshots.length}
            </p>
          )}
        </div>
        <button
          onClick={onClose}
          className="text-slate-500 hover:text-slate-200 transition-colors p-1.5 rounded-lg hover:bg-white/5"
          aria-label="Cerrar"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 min-h-0">
        {loading && (
          <div className="flex justify-center items-center h-80">
            <Spinner size="lg" />
          </div>
        )}

        {error && (
          <div className="flex justify-center items-center h-80">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {!loading && !error && screenshots.length === 0 && (
          <div className="flex justify-center items-center h-80">
            <p className="text-slate-500">No hay capturas disponibles.</p>
          </div>
        )}

        {!loading && screenshots.length > 0 && (
          <>
            {/* Main image */}
            <div className="relative group/img bg-black/40" style={{ height: '420px' }}>
              <img
                key={screenshots[current].id}
                src={screenshots[current].url}
                alt={screenshots[current].caption ?? `Captura ${current + 1}`}
                className="w-full h-full object-cover animate-fade-in"
              />

              {/* Nav arrows */}
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

              {/* Caption */}
              {screenshots[current].caption && (
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-4">
                  <p className="text-slate-300 text-sm">{screenshots[current].caption}</p>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {screenshots.length > 1 && (
              <div className="flex gap-2 p-4 overflow-x-auto border-t border-indigo-500/10"
                style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(99,102,241,0.3) transparent' }}>
                {screenshots.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrent(i)}
                    className={`flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200 ${
                      i === current
                        ? 'ring-2 ring-indigo-500 opacity-100'
                        : 'opacity-40 hover:opacity-70'
                    }`}
                    style={{ width: 80, height: 50 }}
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
