import { useState } from 'react'
import type { ReactElement } from 'react'
import Header from '../components/Header'

function Contact(): ReactElement {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    alert('¡Gracias por contactarnos! Te responderemos pronto.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <Header />
      
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-slate-500/70 mb-4 font-light">
              Contacto
            </p>
            <h1 className="text-4xl md:text-5xl font-light text-slate-700 mb-6 font-serif">
              Hablemos de tu historia eterna
            </h1>
            <p className="text-slate-600/80 font-light leading-relaxed">
              ¿Tienes alguna pregunta? Estamos aquí para ayudarte a crear 
              la web perfecta para tu día especial.
            </p>
          </div>

          <div className="border-t border-slate-300/30 pt-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-wider text-slate-500/70 mb-3 font-light"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-slate-300/40 focus:border-slate-400 outline-none transition-colors text-slate-700 font-light"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-wider text-slate-500/70 mb-3 font-light"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-slate-300/40 focus:border-slate-400 outline-none transition-colors text-slate-700 font-light"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-wider text-slate-500/70 mb-3 font-light"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-0 py-3 bg-transparent border-b border-slate-300/40 focus:border-slate-400 outline-none transition-colors resize-none text-slate-700 font-light"
                  placeholder="Cuéntanos sobre tu boda..."
                />
              </div>

              <button
                type="submit"
                className="mt-8 px-8 py-3 text-sm uppercase tracking-wider text-slate-700 border border-slate-300/50 hover:border-slate-400 transition-all font-light bg-white/50"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          <div className="mt-16 text-center border-t border-slate-300/30 pt-12">
            <p className="text-slate-600/70 mb-4 font-light text-sm">
              O escríbenos directamente a:
            </p>
            <a
              href="mailto:info@kuon.com"
              className="text-slate-700 hover:text-slate-600 font-light transition-colors"
            >
              info@kuon.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
