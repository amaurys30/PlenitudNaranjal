'use client'

import Link from 'next/link'

const projects = [
  {
    id: 1,
    label: 'Educación en valores',
    badge: 'Proyecto 01',
    title: 'Campamentos\nde Niños',
    description1:
      'Cada año abrimos un espacio donde los niños de Naranjal descubren la Palabra de Dios, fortalecen amistades y aprenden valores que los acompañarán toda la vida.',
    description2:
      'Creemos que sembrar esperanza en la niñez es construir un mejor futuro para toda la comunidad.',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80',
    tags: ['✝️ Valores', '🤝 Comunidad', '⛺ Campamentos', '👦 Niños'],
    href: '/proyectos/campamentos',
  },

  {
    id: 2,
    label: 'Nutrición y bienestar',
    badge: 'Proyecto 02',
    title: 'Comedor\nEstudiantil',
    description1:
      'Desde 2025 brindamos alimentación diaria a los niños de la institución educativa de Naranjal.',
    description2:
      'Cada plato representa amor, cuidado y una oportunidad para que los niños puedan aprender con energía y bienestar.',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80',
    tags: ['🍽️ Alimentación', '📚 Educación', '🏘️ Naranjal', '💛 Servicio'],
    href: '/proyectos/comedor',
  },

  {
    id: 3,
    label: 'Agricultura sostenible',
    badge: 'Proyecto 03',
    title: 'Producción\nde Panela',
    description1:
      'Nuestro trapiche produce panela 100% natural y libre de químicos, respetando la tierra y fortaleciendo la economía local.',
    description2:
      'Este proyecto sostenible también ayuda a financiar nuestras demás iniciativas sociales.',
    image:
      'https://images.unsplash.com/photo-1595351298020-038700609878?w=1200&q=80',
    tags: ['🌿 Natural', '🏭 Trapiche', '🌱 Sostenible', '💯 Orgánico'],
    href: '/proyectos/panela',
  },
]

export default function ProjectsDetail() {
  return (
    <section className="projects-detail-section">
      <div className="projects-detail-container">

        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-detail-row ${
              index % 2 !== 0 ? 'reverse' : ''
            }`}
          >
            <div className="project-detail-image">
              <div className="project-detail-badge">
                {project.badge}
              </div>

              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="project-detail-content">
              <span className="project-detail-label">
                {project.label}
              </span>

              <h2>
                {project.title.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </h2>

              <div className="project-detail-line" />

              <p>{project.description1}</p>

              <p>{project.description2}</p>

              <div className="project-detail-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={project.href}
                className="project-detail-button"
              >
                Conocer más
                <span>→</span>
              </Link>
            </div>
          </div>
        ))}

        {/* FUTUROS PROYECTOS */}

        <div className="future-projects-card">
          <div className="future-projects-glow" />

          <span className="future-projects-label">
            Mirando al futuro
          </span>

          <h2>
            Queremos seguir creando
            <span> nuevos proyectos</span>
          </h2>

          <p>
            Nuestro sueño es continuar expandiendo el impacto de
            Plenitud NR en la vereda de Naranjal. Trabajamos para
            desarrollar nuevas iniciativas enfocadas en educación,
            bienestar social, sostenibilidad y oportunidades para
            la comunidad.
          </p>

          <div className="future-projects-actions">
            <Link href="/contacto" className="future-btn-outline">
              Tienes una idea 💭 <br/> Contactanos
            </Link>

            
          </div>
        </div>

      </div>
    </section>
  )
}
