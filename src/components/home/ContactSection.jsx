import { Mail, MapPin, Landmark, Leaf } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        
        <div className="contact-info">
          <span className="contact-tag">ESCRÍBENOS</span>
          <h2>Conecta con Plenitud NR</h2>
          <p>
            ¿Quieres colaborar, donar, saber más de nuestros proyectos o
            simplemente saludarnos? Con gusto te respondemos.
          </p>

          <div className="contact-items">
            <div className="contact-item-group">
              <div className="icon-wrapper red-bg"><MapPin size={20} fill="currentColor" /></div>
              <div>
                <label>UBICACIÓN</label>
                <span>Vereda Naranjal, Colombia</span>
              </div>
            </div>

            <div className="contact-item-group">
              <div className="icon-wrapper blue-bg"><Mail size={20} fill="currentColor" /></div>
              <div>
                <label>CORREO</label>
                <span>plenitudnaranjal@gmail.com</span>
              </div>
            </div>

            <div className="contact-item-group">
              <div className="icon-wrapper purple-bg"><Landmark size={20} /></div>
              <div>
                <label>TIPO</label>
                <span>Asociación sin ánimo de lucro</span>
              </div>
            </div>

            <div className="contact-item-group">
              <div className="icon-wrapper green-bg"><Leaf size={20} /></div>
              <div>
                <label>MISIÓN</label>
                <span>Fe, Servicio y Comunidad en Naranjal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="form-wrapper">
          <form className="contact-form">
            <h3>Envíanos un mensaje</h3>
            
            <div className="input-group">
              <label>Nombre completo</label>
              <input type="text" placeholder="Tu nombre" />
            </div>

            <div className="input-group">
              <label>Correo electrónico</label>
              <input type="email" placeholder="tu@correo.com" />
            </div>

            <div className="input-group">
              <label>¿Sobre qué nos escribes?</label>
              <select>
                <option>Selecciona una opción...</option>
                <option>Donaciones</option>
                <option>Voluntariado</option>
                <option>Información</option>
              </select>
            </div>

            <div className="input-group">
              <label>Mensaje</label>
              <textarea rows="4" placeholder="Cuéntanos en qué podemos ayudarte..."></textarea>
            </div>

            <button type="submit">
              Enviar mensaje <Leaf size={18} style={{marginLeft: '8px'}} />
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}
