'use client'

import Link from 'next/link'

import {
  Heart,
  HandHelping,
  Megaphone,
  PackageOpen,
  ArrowRight,
} from 'lucide-react'

const participateOptions = [
  {
    icon: <Heart size={34} color="#e63946" strokeWidth={2.2}  />,
    iconClass: 'icon-heart',
    title: 'Donar',
    description:
      'Tu aporte económico ayuda a sostener el comedor estudiantil, los campamentos y los nuevos proyectos de Plenitud NR.',
    href: '/donar',
    button: 'Hacer una donación',
  },

  {
    icon: <HandHelping size={34} color="#2a9d8f" strokeWidth={2.2} />,
    iconClass: 'icon-help',
    title: 'Ser voluntario',
    description:
      'Puedes servir en actividades comunitarias, apoyar eventos y participar en nuestros proyectos sociales.',
    href: '/contacto',
    button: 'Quiero ayudar',
  },

  {
    icon: <Megaphone size={34} color="#4361ee" strokeWidth={2.2} />,
    iconClass: 'icon-share',
    title: 'Compartir',
    description:
      'Difunde nuestra misión en redes sociales y ayuda a que más personas conozcan el trabajo que realizamos.',
    href: '/contacto',
    button: 'Compartir misión',
  },

  {
    icon: <PackageOpen size={34} color="#c8791f" strokeWidth={2.2} />,
    iconClass: 'icon-panela',
    title: 'Comprar panela',
    description:
      'Apoya nuestra producción sostenible adquiriendo panela 100% natural producida en Naranjal.',
    href: '/contacto',
    button: 'Más información',
  },
]

export default function ProjectsParticipate() {
  return (
    <section className="projects-participate-section">

      <div className="projects-participate-glow" />

      <div className="projects-participate-container">

        {/* HEADER */}

        <div className="projects-participate-header">

          <span className="projects-participate-label">
            Únete a la misión
          </span>

          <h2>
            Hay muchas formas de
            <span> participar</span>
          </h2>

          <p>
            Cada persona puede aportar de una manera diferente.
            Lo importante es sumar esperanza, amor y apoyo para
            seguir transformando vidas en Naranjal.
          </p>

        </div>

        {/* GRID */}

        <div className="projects-participate-grid">

          {participateOptions.map((item, index) => (
            <div
              key={index}
              className="participate-card"
            >

              <div className="participate-card-blur" />

              <div
                className={`participate-icon ${item.iconClass}`}
              >
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <Link
                href={item.href}
                className="participate-link"
              >
                {item.button}

                <ArrowRight size={18} />
              </Link>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}