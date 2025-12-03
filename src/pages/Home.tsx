import { Link } from 'react-router-dom'
import type { ReactElement } from 'react'
import Header from '../components/Header'

function Home(): ReactElement {
  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <Header />
      
      {/* Hero Section - Whimsical */}
      <section className="container mx-auto px-6 py-32 md:py-40">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-slate-700 mb-6 leading-tight">
            Captura tu amor
            <span className="block mt-2 font-serif italic text-slate-600">para siempre</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600/80 mb-12 font-light leading-relaxed">
            Kuon (永遠) significa eterno en japonés. 
            <br />
            Una web de boda minimalista que preserva tus momentos más preciosos.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/configurador"
              className="px-8 py-3 text-sm uppercase tracking-wider text-slate-700 border border-slate-300/50 hover:border-slate-400 transition-all font-light bg-white/50"
            >
              Crear mi web
            </Link>
          </div>
        </div>
      </section>

      {/* Separador decorativo con elemento whimsical */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-slate-300/30 flex-1"></div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="text-slate-400/40"
            >
              <path
                d="M16 8 C18 6, 22 6, 24 8 C26 10, 26 14, 24 16 C22 18, 18 18, 16 16 C14 18, 10 18, 8 16 C6 14, 6 10, 8 8 C10 6, 14 6, 16 8 Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="16" cy="12" r="2" fill="currentColor" />
            </svg>
            <div className="h-px bg-slate-300/30 flex-1"></div>
          </div>
        </div>
      </section>

      {/* Sección de Concepto */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-slate-700 mb-8 font-serif text-center">
            Eterno como tu promesa
          </h2>
          <div className="space-y-12">
            <div className="text-center">
              <p className="text-slate-600/80 leading-relaxed font-light text-lg mb-8">
                Cada web que creamos es un testimonio atemporal de tu amor, 
                diseñado con delicadeza y la nostalgia de los momentos que perduran.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 pt-8 border-t border-slate-300/30">
              <div>
                <div className="mb-6">
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-slate-400/50"
                  >
                    <path
                      d="M28 12 L28 28 L36 36"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="28" cy="28" r="20" />
                  </svg>
                </div>
                <h3 className="text-sm uppercase tracking-widest text-slate-500/70 mb-4 font-light">
                  Minimalismo
                </h3>
                <p className="text-slate-600/80 font-light leading-relaxed">
                  Diseños limpios que dejan que tus momentos brillen. 
                  Sin distracciones, solo la esencia de tu historia.
                </p>
              </div>
              
              <div>
                <div className="mb-6">
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-slate-400/50"
                  >
                    <path
                      d="M16 28 L24 36 L40 20"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="28" cy="28" r="20" />
                  </svg>
                </div>
                <h3 className="text-sm uppercase tracking-widest text-slate-500/70 mb-4 font-light">
                  Atemporal
                </h3>
                <p className="text-slate-600/80 font-light leading-relaxed">
                  Estética que trasciende las tendencias. 
                  Un diseño que seguirá siendo hermoso años después.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separador decorativo */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-slate-300/30 flex-1"></div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="text-slate-400/40"
            >
              <path
                d="M16 8 C18 6, 22 6, 24 8 C26 10, 26 14, 24 16 C22 18, 18 18, 16 16 C14 18, 10 18, 8 16 C6 14, 6 10, 8 8 C10 6, 14 6, 16 8 Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="16" cy="12" r="2" fill="currentColor" />
            </svg>
            <div className="h-px bg-slate-300/30 flex-1"></div>
          </div>
        </div>
      </section>

      {/* Ilustración decorativa whimsical */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center py-16">
            <svg
              width="240"
              height="240"
              viewBox="0 0 240 240"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-slate-300/40"
            >
              {/* Círculos concéntricos suaves */}
              <circle cx="120" cy="120" r="90" />
              <circle cx="120" cy="120" r="70" />
              <circle cx="120" cy="120" r="50" />
              {/* Elementos decorativos orgánicos */}
              <path
                d="M120 30 Q140 50, 150 70 T160 120 T150 170 T120 210 T90 170 T80 120 T90 70 T120 30"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* CTA Final - Minimalista */}
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-2xl mx-auto text-center border-t border-slate-300/30 pt-16">
          <p className="text-sm uppercase tracking-widest text-slate-500/70 mb-6 font-light">
            Comienza tu historia eterna
          </p>
          <Link
            to="/configurador"
            className="inline-block px-8 py-3 text-sm uppercase tracking-wider text-slate-700 border border-slate-300/50 hover:border-slate-400 transition-all font-light bg-white/50"
          >
            Crear mi web de boda
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
