'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Campamentos de Niños',
    description:
      'Cada año reunimos a niños de la comunidad para compartir valores, actividades recreativas y enseñanzas basadas en la fe y la armonía.',
    image:'/images/campamento.jpg',
    tag: 'Educación · Valores',
  },

  {
    title: 'Comedor Estudiantil',
    description:
      'Desde 2025 brindamos alimentación a los niños de la institución educativa de la vereda Naranjal, apoyando su bienestar y crecimiento.',
    image:'/images/comedor.jpg',
    tag: 'Activo desde 2025',
  },

  {
    title: 'Producción de Panela',
    description:
      'Nuestro trapiche produce panela 100% natural con cultivos libres de químicos y procesos sostenibles que respetan la tierra.',
    image:'/images/panela.jpg',
    tag: 'Agricultura sostenible',
  },
]

export default function Projects() {
  return (
    <section className="projects">

      <div className="projects-header">

        <motion.span
          className="section-badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nuestros proyectos
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Transformando vidas
          <br />
          en Naranjal
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Trabajamos en proyectos que fortalecen la comunidad,
          apoyan a los niños y promueven una agricultura sostenible.
        </motion.p>

      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >

            <div
              className="project-image"
              style={{
                backgroundImage: `url(${project.image})`,
              }}
            ></div>

            <div className="project-content">

              <span className="project-tag">
                {project.tag}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  )
}