import { Link } from 'react-router-dom'
import type { ReactElement } from 'react'
import Header from '../components/Header'

function Home(): ReactElement {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Tu Boda, Tu Historia
            <span className="block text-rose-600 mt-2">Tu Web Personalizada</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Crea una landing page única y elegante para el día más especial de tu vida.
            Diseños personalizados que reflejan tu amor y estilo.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/configurador"
              className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Crear Mi Web de Boda
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-50 text-rose-600 font-semibold py-4 px-8 rounded-lg transition-all border-2 border-rose-600"
            >
              Más Información
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-xl text-gray-600">
            Todo lo que necesitas para una web de boda perfecta
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">💍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Diseños Únicos
            </h3>
            <p className="text-gray-600">
              Cada web es única y personalizada según tus gustos y estilo. 
              Refleja tu personalidad y la de tu pareja.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Totalmente Responsive
            </h3>
            <p className="text-gray-600">
              Perfecta en cualquier dispositivo. Tus invitados podrán verla 
              desde móvil, tablet o ordenador.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Fácil de Usar
            </h3>
            <p className="text-gray-600">
              Configurador intuitivo que te permite crear tu web en minutos. 
              Sin conocimientos técnicos necesarios.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            ¿Lista para crear tu web de boda?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Empieza ahora y crea la web perfecta para tu día especial
          </p>
          <Link
            to="/configurador"
            className="inline-block bg-white text-rose-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Comenzar Ahora
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
