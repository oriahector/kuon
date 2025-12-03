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
    colorScheme: 'rose',
    style: 'elegant',
    sections: ['hero', 'story', 'gallery'],
    coupleNames: '',
    weddingDate: '',
  })

  const colorSchemes = [
    { id: 'rose', name: 'Rosa Elegante', colors: 'from-rose-500 to-pink-500' },
    { id: 'gold', name: 'Dorado Clásico', colors: 'from-amber-500 to-yellow-500' },
    { id: 'blue', name: 'Azul Sereno', colors: 'from-blue-500 to-indigo-500' },
    { id: 'purple', name: 'Púrpura Romántico', colors: 'from-purple-500 to-pink-500' },
  ]

  const styles = [
    { id: 'elegant', name: 'Elegante', icon: '✨' },
    { id: 'modern', name: 'Moderno', icon: '🎨' },
    { id: 'classic', name: 'Clásico', icon: '👑' },
    { id: 'rustic', name: 'Rústico', icon: '🌾' },
  ]

  const availableSections = [
    { id: 'hero', name: 'Hero Principal', icon: '🏠' },
    { id: 'story', name: 'Nuestra Historia', icon: '💕' },
    { id: 'gallery', name: 'Galería de Fotos', icon: '📸' },
    { id: 'timeline', name: 'Cronograma', icon: '⏰' },
    { id: 'rsvp', name: 'Confirmar Asistencia', icon: '✉️' },
    { id: 'gifts', name: 'Lista de Regalos', icon: '🎁' },
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
    alert('¡Configuración guardada! Te contactaremos pronto para finalizar tu web.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      <Header />
      
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Configurador de Web de Boda
            </h1>
            <p className="text-xl text-gray-600">
              Personaliza tu web de boda en minutos
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Panel de Configuración */}
            <div className="lg:col-span-2 space-y-6">
              {/* Información Básica */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Información Básica
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombres de la Pareja
                    </label>
                    <input
                      type="text"
                      value={config.coupleNames}
                      onChange={(e) =>
                        setConfig({ ...config, coupleNames: e.target.value })
                      }
                      placeholder="Ej: María & Juan"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Fecha de la Boda
                    </label>
                    <input
                      type="date"
                      value={config.weddingDate}
                      onChange={(e) =>
                        setConfig({ ...config, weddingDate: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Esquema de Colores */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Esquema de Colores
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {colorSchemes.map((scheme) => (
                    <button
                      key={scheme.id}
                      onClick={() =>
                        setConfig({ ...config, colorScheme: scheme.id })
                      }
                      className={`p-4 rounded-lg border-2 transition-all ${
                        config.colorScheme === scheme.id
                          ? 'border-rose-600 ring-2 ring-rose-200'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div
                        className={`h-12 rounded mb-2 bg-gradient-to-r ${scheme.colors}`}
                      />
                      <p className="text-sm font-semibold text-gray-700">
                        {scheme.name}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Estilo */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Estilo
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {styles.map((styleOption) => (
                    <button
                      key={styleOption.id}
                      onClick={() =>
                        setConfig({ ...config, style: styleOption.id })
                      }
                      className={`p-6 rounded-lg border-2 transition-all ${
                        config.style === styleOption.id
                          ? 'border-rose-600 bg-rose-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-4xl mb-2">{styleOption.icon}</div>
                      <p className="text-sm font-semibold text-gray-700">
                        {styleOption.name}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Secciones */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Secciones Incluidas
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {availableSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => toggleSection(section.id)}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        config.sections.includes(section.id)
                          ? 'border-rose-600 bg-rose-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-2xl mb-2">{section.icon}</div>
                      <p className="text-sm font-semibold text-gray-700">
                        {section.name}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Panel de Vista Previa */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Vista Previa
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">Pareja:</p>
                    <p className="font-semibold text-gray-900">
                      {config.coupleNames || 'María & Juan'}
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">Fecha:</p>
                    <p className="font-semibold text-gray-900">
                      {config.weddingDate || 'Selecciona una fecha'}
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">Secciones:</p>
                    <p className="font-semibold text-gray-900">
                      {config.sections.length} seleccionadas
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <button
                    onClick={handlePreview}
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Vista Previa
                  </button>
                  <button
                    onClick={handleSave}
                    className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Guardar y Continuar
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

