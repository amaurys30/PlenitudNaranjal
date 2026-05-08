'use client'

import { useState } from 'react'
import Link from 'next/link'

const projects = [
  {
    id: 'p1',
    number: '01',
    emoji: '⛺',
    badge: '⛺ Proyecto 01',
    title: 'Campamentos\nde Niños',
    miniTitle: 'Campamentos',
    description:
      'Cada año abrimos un espacio donde los niños de Naranjal descubren la Palabra de Dios, construyen amistades y aprenden valores que los acompañarán toda la vida.',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80',
    href: '/proyectos/campamentos',
  },
  {
    id: 'p2',
    number: '02',
    emoji: '🍽️',
    badge: '🍽️ Proyecto 02',
    title: 'Comedor\nEstudiantil',
    miniTitle: 'Comedor',
    description:
      'Desde 2025 brindamos alimentación diaria a los niños de la institución educativa de Naranjal.',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80',
    href: '/proyectos/comedor',
  },
  {
    id: 'p3',
    number: '03',
    emoji: '🌾',
    badge: '🌾 Proyecto 03',
    title: 'Producción\nde Panela',
    miniTitle: 'Panela',
    description:
      'En nuestro trapiche producimos panela 100% natural y sin químicos.',
    image:
      'https://images.unsplash.com/photo-1595351298020-038700609878?w=1200&q=80',
    href: '/proyectos/panela',
  },
]

export default function ProjectsPanels() {
  const [activePanel, setActivePanel] = useState('p2')

  return (
    <section className="projects-panels-section">
      <div className="projects-panels-intro">
        <span className="projects-panels-label">
          Elige y explora
        </span>

        <h2>
          Nuestros tres <span>proyectos</span>
        </h2>

        <p>
          Descubre cómo transformamos vidas en la vereda de Naranjal.
        </p>
      </div>

      <div className="projects-panels-wrap">
        {projects.map((project) => {
          const isActive = activePanel === project.id

          return (
            <div
              key={project.id}
              className={`project-panel ${isActive ? 'active' : ''}`}
              onMouseEnter={() => setActivePanel(project.id)}
              onClick={() => setActivePanel(project.id)}
            >
              <div
                className="project-panel-bg"
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              />

              <div className="project-panel-overlay" />
              <div className="project-panel-gradient" />

              <div className="project-panel-number">
                {project.number}
              </div>

              <div className="project-panel-mini">
                <span className="project-panel-emoji">
                  {project.emoji}
                </span>

                <span className="project-panel-mini-title">
                  {project.miniTitle}
                </span>
              </div>

              <div className="project-panel-content">
                <div className="project-panel-badge">
                  {project.badge}
                </div>

                <h3>
                  {project.title.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h3>

                <p>{project.description}</p>

                <Link
                  href={project.href}
                  className="project-panel-button"
                >
                  Ver proyecto completo
                  <span>→</span>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
