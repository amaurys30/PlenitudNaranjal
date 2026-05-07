import Link from 'next/link'

import {
  Globe,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
 Landmark,
  Send,
  Leaf
} from 'lucide-react'


export default function Footer(){

  return(

    <footer className="footer">

      <div className="footer-top">

        {/* INFO */}
        <div className="footer-brand">

          <h2>
            Plenitud <span>NR</span>
          </h2>

          <div className="footer-line"></div>

          <p>
            Asociación sin ánimo de lucro que trabaja
            por el bienestar de la vereda de Naranjal
            a través de la fe, el servicio y la comunidad.
          </p>

          <div className="footer-contact">

            <div className="footer-contact-item">
              <MapPin size={18}/>
              <span>Vereda Naranjal, Colombia</span>
            </div>

            <div className="footer-contact-item">
              <Mail size={18}/>
              <span>plenitudnaranjal@gmail.com</span>
            </div>

            <div className="footer-contact-item">
              <Phone size={18}/>
              <span>+57 300 000 0000</span>
            </div>

            <div className="footer-contact-item">
              <Landmark size={18}/>
              <span>Asociación sin ánimo de lucro</span>
            </div>

          </div>

        </div>

        {/* NOSOTROS */}
        <div className="footer-links">

          <h3>Nosotros</h3>

          <div className="footer-line small"></div>

          <Link href="/nosotros">
            Quiénes Somos
          </Link>

          <Link href="/equipo">
            Nuestro Equipo
          </Link>

          <Link href="/impacto">
            Nuestro Impacto
          </Link>

          <Link href="/historia">
            Historia
          </Link>

        </div>

        {/* PROYECTOS */}
        <div className="footer-links">

          <h3>Proyectos</h3>

          <div className="footer-line small"></div>

          <Link href="/proyectos">
            Campamentos de Niños
          </Link>

          <Link href="/proyectos">
            Comedor Estudiantil
          </Link>

          <Link href="/proyectos">
            Producción de Panela
          </Link>

          <Link href="/proyectos">
            Agricultura Sostenible
          </Link>

        </div>

        {/* PARTICIPA */}
        <div className="footer-links">

          <h3>Participa</h3>

          <div className="footer-line small"></div>

          <Link href="/donaciones">
            Donar
          </Link>

          <Link href="/eventos">
            Eventos
          </Link>

          <Link href="/voluntariado">
            Voluntariado
          </Link>

          <Link href="/contacto">
            Contacto
          </Link>

        </div>

        {/* REDES */}
        <div className="footer-social">

          <h3>Síguenos</h3>

          <div className="footer-line small"></div>

          <p>
            Conéctate con nosotros y sé parte
            de esta misión.
          </p>

          <div className="footer-socials">
            <a href="#">
                <Globe size={30} />
            </a>

            <a href="#">
                <Leaf size={30} />
            </a>

            <a href="#">
                <MessageCircle size={30} />
            </a>
        </div>

        </div>

      </div>

      {/* NEWSLETTER */}

      <div className="footer-newsletter">

        <div className="newsletter-left">

          <div className="newsletter-icon">
            <Leaf size={26}/>
          </div>

          <div>

            <h4>
              Mantente informado
            </h4>

            <p>
              Recibe noticias, eventos y avances
              de nuestros proyectos.
            </p>

          </div>

        </div>

        <div className="newsletter-form">

          <input
            type="email"
            placeholder="Tu correo electrónico"
          />

          <button>

            Suscribirme

            <Send size={18}/>

          </button>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2025 Asociación Plenitud Naranjal.
          Todos los derechos reservados.
        </p>

        <p>
          Vereda Naranjal, Colombia
        </p>

        <p className="footer-frase">
          🤍 Fe, Servicio y Comunidad
        </p>

      </div>

    </footer>

  )
}