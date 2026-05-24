'use client'

import { Leaf } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="contact-section">

      <div className="contact-container">

        <form className="contact-form">

          <span className="contact-tag">
            CONTÁCTANOS
          </span>

          <h2>
            Hablemos
          </h2>

          <p>
            Si deseas colaborar, apoyar nuestros proyectos
            o comunicarte con Plenitud NR, estaremos felices
            de escucharte.
          </p>

          <div className="input-group">
            <label>Nombre completo</label>

            <input
              type="text"
              placeholder="Tu nombre"
            />
          </div>

          <div className="input-group">
            <label>Correo electrónico</label>

            <input
              type="email"
              placeholder="tu@correo.com"
            />
          </div>

          <div className="input-group">
            <label>¿Sobre qué nos escribes?</label>

            <select>
              <option>Selecciona una opción...</option>
              <option>Donaciones</option>
              <option>Voluntariado</option>
              <option>Información</option>
              <option>Proyectos</option>
            </select>
          </div>

          <div className="input-group">
            <label>Mensaje</label>

            <textarea
              rows="5"
              placeholder="Cuéntanos en qué podemos ayudarte..."
            />
          </div>

          <button type="submit">
            Enviar mensaje

            <Leaf
              size={18}
              style={{ marginLeft: '8px' }}
            />
          </button>

        </form>

      </div>

    </section>
  )
}