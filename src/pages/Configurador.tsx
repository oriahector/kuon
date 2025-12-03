import { useState } from 'react'
import type { ReactElement } from 'react'
import Header from '../components/Header'

interface TemplateConfig {
  colorScheme: string
  style: string
  sections: string[]
  coupleNames: string
  weddingDate: string
}

function Configurador(): ReactElement {
  const [config, setConfig] = useState<TemplateConfig>({
    colorScheme: 'golden',
    style: 'minimal',
    sections: ['hero', 'story', 'gallery'],
    coupleNames: '',
    weddingDate: '',
  })

  const colorSchemes = [
    { id: 'sage', name: 'Sage Green', colors: 'from-slate-300 to-slate-200' },
    { id: 'warm', name: 'Cálido', colors: 'from-slate-200 to-slate-100' },
    { id: 'soft', name: 'Suave', colors: 'from-slate-100 to-slate-50' },
    { id: 'deep', name: 'Profundo', colors: 'from-slate-400 to-slate-300' },
  ]

  const styles = [
    { id: 'minimal', name: 'Minimalista', desc: 'Limpio y elegante' },
    { id: 'nostalgic', name: 'Nostálgico', desc: 'Con grano y calidez' },
    { id: 'classic', name: 'Clásico', desc: 'Atemporal' },
    { id: 'romantic', name: 'Romántico', desc: 'Delicado y suave' },
  ]

  const availableSections = [
    { id: 'hero', name: 'Hero Principal' },
    { id: 'story', name: 'Nuestra Historia' },
    { id: 'gallery', name: 'Galería' },
    { id: 'timeline', name: 'Cronograma' },
    { id: 'rsvp', name: 'Confirmar' },
    { id: 'gifts', name: 'Regalos' },
  ]

  const toggleSection = (sectionId: string): void => {
    setConfig((prev) => ({
      ...prev,
      sections: prev.sections.includes(sectionId)
        ? prev.sections.filter((id) => id !== sectionId)
        : [...prev.sections, sectionId],
    }))
  }

  const handlePreview = (): void => {
    console.log('Configuración:', config)
    alert('Vista previa: Esta funcionalidad se implementará próximamente')
  }

  const handleSave = (): void => {
    console.log('Guardando configuración:', config)
    alert('¡Configuración guardada! Te contactaremos pronto para finalizar tu web eterna.')
  }

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <Header />
      
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-slate-500/70 mb-4 font-light">
              Configurador
            </p>
            <h1 className="text-4xl md:text-5xl font-light text-slate-700 mb-6 font-serif">
              Crea tu web eterna
            </h1>
            <p className="text-slate-600/80 font-light">
              Personaliza cada detalle de tu historia
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Panel de Configuración */}
            <div className="lg:col-span-2 space-y-12">
              {/* Información Básica */}
              <div className="border-t border-slate-300/30 pt-8">
                <h2 className="text-xs uppercase tracking-widest text-slate-500/70 mb-6 font-light">
                  Información Básica
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-500/70 mb-3 font-light">
                      Nombres de la Pareja
                    </label>
                    <input
                      type="text"
                      value={config.coupleNames}
                      onChange={(e) =>
                        setConfig({ ...config, coupleNames: e.target.value })
                      }
                      placeholder="Ej: María & Juan"
                      className="w-full px-0 py-3 bg-transparent border-b border-slate-300/40 focus:border-slate-400 outline-none transition-colors text-slate-700 font-light"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-500/70 mb-3 font-light">
                      Fecha de la Boda
                    </label>
                    <input
                      type="date"
                      value={config.weddingDate}
                      onChange={(e) =>
                        setConfig({ ...config, weddingDate: e.target.value })
                      }
                      className="w-full px-0 py-3 bg-transparent border-b border-slate-300/40 focus:border-slate-400 outline-none transition-colors text-slate-700 font-light"
                    />
                  </div>
                </div>
              </div>

              {/* Esquema de Colores */}
              <div className="border-t border-slate-300/30 pt-8">
                <h2 className="text-xs uppercase tracking-widest text-slate-500/70 mb-6 font-light">
                  Paleta de Colores
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {colorSchemes.map((scheme) => (
                    <button
                      key={scheme.id}
                      onClick={() =>
                        setConfig({ ...config, colorScheme: scheme.id })
                      }
                      className={`p-4 border transition-all text-left ${
                        config.colorScheme === scheme.id
                          ? 'border-slate-400/50 bg-white/50'
                          : 'border-slate-300/30 hover:border-slate-400/50'
                      }`}
                    >
                      <div
                        className={`h-16 mb-3 bg-gradient-to-r ${scheme.colors} grain-overlay`}
                      />
                      <p className="text-sm font-light text-slate-700">
                        {scheme.name}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Estilo */}
              <div className="border-t border-slate-300/30 pt-8">
                <h2 className="text-xs uppercase tracking-widest text-slate-500/70 mb-6 font-light">
                  Estilo
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {styles.map((styleOption) => (
                    <button
                      key={styleOption.id}
                      onClick={() =>
                        setConfig({ ...config, style: styleOption.id })
                      }
                      className={`p-6 border transition-all text-left ${
                        config.style === styleOption.id
                          ? 'border-slate-400/50 bg-white/50'
                          : 'border-slate-300/30 hover:border-slate-400/50'
                      }`}
                    >
                      <p className="text-sm font-light text-slate-700 mb-1">
                        {styleOption.name}
                      </p>
                      <p className="text-xs text-slate-600/60 font-light">
                        {styleOption.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Secciones */}
              <div className="border-t border-slate-300/30 pt-8">
                <h2 className="text-xs uppercase tracking-widest text-slate-500/70 mb-6 font-light">
                  Secciones
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {availableSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => toggleSection(section.id)}
                      className={`p-4 border transition-all text-left ${
                        config.sections.includes(section.id)
                          ? 'border-slate-400/50 bg-white/50'
                          : 'border-slate-300/30 hover:border-slate-400/50'
                      }`}
                    >
                      <p className="text-xs font-light text-slate-700">
                        {section.name}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Panel de Vista Previa */}
            <div className="lg:col-span-1">
              <div className="border border-slate-300/30 p-8 sticky top-24 bg-white/50">
                <h2 className="text-xs uppercase tracking-widest text-slate-500/70 mb-8 font-light">
                  Vista Previa
                </h2>
                <div className="space-y-6 mb-8">
                  <div className="border-b border-slate-300/30 pb-4">
                    <p className="text-xs uppercase tracking-wider text-slate-500/70 mb-2 font-light">
                      Pareja
                    </p>
                    <p className="text-sm font-light text-slate-700">
                      {config.coupleNames || 'María & Juan'}
                    </p>
                  </div>
                  <div className="border-b border-slate-300/30 pb-4">
                    <p className="text-xs uppercase tracking-wider text-slate-500/70 mb-2 font-light">
                      Fecha
                    </p>
                    <p className="text-sm font-light text-slate-700">
                      {config.weddingDate || 'Selecciona una fecha'}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500/70 mb-2 font-light">
                      Secciones
                    </p>
                    <p className="text-sm font-light text-slate-700">
                      {config.sections.length} seleccionadas
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <button
                    onClick={handlePreview}
                    className="w-full px-6 py-3 text-xs uppercase tracking-wider text-slate-700 border border-slate-300/50 hover:border-slate-400 transition-all font-light bg-white/50"
                  >
                    Vista Previa
                  </button>
                  <button
                    onClick={handleSave}
                    className="w-full px-6 py-3 text-xs uppercase tracking-wider text-slate-700 border border-slate-300/50 hover:border-slate-400 transition-all font-light bg-white/50"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Configurador
