interface ContactItem {
  id: string
  label: string
  value: string
  href: string
  icon: React.ReactNode
  color: string
  border: string
}

const CONTACT_ITEMS: ContactItem[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'adriferreiro.88@gmail.com',
    href: 'mailto:adriferreiro.88@gmail.com',
    color: 'text-indigo-400 group-hover:text-indigo-300',
    border: 'hover:border-indigo-500/40',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
      </svg>
    ),
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: '+54 9 370 4555801',
    href: 'https://wa.me/5493704555801',
    color: 'text-emerald-400 group-hover:text-emerald-300',
    border: 'hover:border-emerald-500/40',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5 -.669 -.51 -.173 -.008 -.371 -.01 -.57 -.01 -.198 0 -.52 .074 -.792 .372 -.272 .297 -1.04 1.0１６ -１．０４ ２．４７９ ０ １．４６２ １．０６５ ２．８７５ １．２１３ ３．０７４ .１４９ .１９８ ２．０９６ ３．２ ５．０７７ ４．４８７ .７０９ .３０６ １．２６２ .４８９ １．６９４ .６２５ .７１２ .２２７ １．３６ .１９５ １．８７１ .１１８ .５７１ -.０８５ １．７５８ -.７１９ ２．００６ -₁．４₁₃ .₂₄₈ -.₆₉₄ .₂₄₈ -₁．₂₈₉ .₁₇₃ -₁．₄₁₃ -.₀₇₄ -₀．₁₂₄ -₀．₂₇₂ -₀．₁₉₈ -₀．５₇ -₀．₃₄⁷z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.137.564 4.14 1.547 5.874L0 24l6.303-1.524A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.784 9.784 0 01-5.12-1.446l-.368-.218-3.813.922.965-3.703-.24-.38A9.785 9.785 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
      </svg>
    ),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/adrian-enrique-ferreiro', 
    href: 'https://www.linkedin.com/in/adrian-enrique-ferreiro/',
    color: 'text-sky-400 group-hover:text-sky-300',
    border: 'hover:border-sky-500/40',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/adrianferreiro',         // TODO: reemplazar con tu usuario
    href: 'https://github.com/adrianferreiro',
    color: 'text-slate-300 group-hover:text-white',
    border: 'hover:border-slate-500/40',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
]

import { AnimateIn } from '../../../shared/components/AnimateIn'

export function Contact() {
  return (
    <section id="contact" className="mt-24">
      <div className="flex items-center gap-4 mb-12">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-indigo-400" />
          <h3 className="text-slate-200 font-semibold text-lg">Contacto</h3>
        </div>
        <div className="flex-1 h-px" style={{ background: 'rgba(99,102,241,0.1)' }} />
      </div>

      <AnimateIn>
      <div
        className="rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-10"
        style={{
          background: 'rgba(15, 20, 60, 0.5)',
          border: '1px solid rgba(129, 140, 248, 0.12)',
        }}
      >
        {/* CTA text */}
        <div className="flex-1 min-w-0">
          <h4 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">
            ¿Tenés un proyecto?<br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #38bdf8, #818cf8)' }}
            >
              Hablemos.
            </span>
          </h4>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            Disponible para proyectos freelance, posiciones full-time y colaboraciones.
            Respondó en menos de 24 hs.
          </p>
        </div>

        {/* Contact links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full md:w-auto md:min-w-[340px]">
          {CONTACT_ITEMS.map(item => (
            <a
              key={item.id}
              href={item.href}
              target={item.id !== 'email' ? '_blank' : undefined}
              rel={item.id !== 'email' ? 'noopener noreferrer' : undefined}
              className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                glass-card ${item.border}`}
            >
              <span className={`flex-shrink-0 transition-colors duration-200 ${item.color}`}>
                {item.icon}
              </span>
              <div className="min-w-0">
                <p className="text-slate-500 text-xs leading-none mb-1">{item.label}</p>
                <p className={`text-sm font-medium truncate transition-colors duration-200 ${item.color}`}>
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
      </AnimateIn>
    </section>
  )
}
