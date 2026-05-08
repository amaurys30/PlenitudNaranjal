'use client'

import Link from 'next/link'

import {
  UtensilsCrossed,
  Wheat,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'

import '@/styles/projects/campamentos/campOtherProjects.css'

const projects = [
  {
    icon: <UtensilsCrossed />,
    color: '#d89a3c',
    title: 'Comedor Estudiantil',
    description:
      'Brindamos alimentación diaria a niños y jóvenes de la institución educativa de Naranjal, fortaleciendo su bienestar y rendimiento escolar.',
    href: '/proyectos/comedor-estudiantil',
    badge: 'Proyecto social',
  },

  {
    icon: <Wheat />,
    color: '#49a36d',
    title: 'Producción de Panela',
    description:
      'Una iniciativa sostenible que impulsa el trabajo comunitario y la producción artesanal de panela 100% natural.',
    href: '/proyectos/panela',
    badge: 'Proyecto productivo',
  },
]

export default function CampOtherProjects() {
  return (
    <section className="camp-other-projects-section">

      <div className="camp-other-glow glow-1" />
      <div className="camp-other-glow glow-2" />

      <div className="camp-other-container">

        {/* HEADER */}

        <div className="camp-other-header">

          <div className="camp-other-mini">

            <Sparkles size={16} />

            <span>
              Más iniciativas
            </span>

          </div>

          <h2>
            Otros proyectos de
            <span> Plenitud NR</span>
          </h2>

          <p>
            Nuestro compromiso con la comunidad continúa creciendo
            mediante proyectos enfocados en bienestar, formación,
            sostenibilidad y transformación social.
          </p>

        </div>

        {/* CARDS */}

        <div className="camp-other-grid">

          {projects.map((project, index) => (
            <Link
              href={project.href}
              className="camp-other-card"
              key={index}
            >

              <div className="camp-other-card-bg" />

              <div
                className="camp-other-icon"
                style={{
                  color: project.color,
                  borderColor: `${project.color}35`,
                  boxShadow: `0 10px 30px ${project.color}20`,
                }}
              >
                {project.icon}
              </div>

              <div className="camp-other-content">

                <span className="camp-other-badge">
                  {project.badge}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

              </div>

              <div className="camp-other-arrow">

                <ArrowUpRight size={22} />

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  )
}
