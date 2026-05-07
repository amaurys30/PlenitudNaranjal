'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const projects = [
  {
    title: 'Campamentos de Niños',
    description:
      'Cada año reunimos a niños de la comunidad para compartir valores, actividades recreativas y enseñanzas basadas en la fe y la armonía.',
    image: '/images/Campamento.jpeg',
    tag: 'Educación · Valores',
  },

  {
    title: 'Comedor Estudiantil',
    description:
      'Desde 2025 brindamos alimentación a los niños de la institución educativa de la vereda Naranjal, apoyando su bienestar y crecimiento.',
    image: '/images/Comedor.jpeg',
    tag: 'Activo desde 2025',
  },

  {
    title: 'Producción de Panela',
    description:
      'Nuestro trapiche produce panela 100% natural con cultivos libres de químicos y procesos sostenibles que respetan la tierra.',
    image: '/images/panelas.jpeg',
    tag: 'Agricultura sostenible',
  },
]

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null)

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
                cursor: 'zoom-in'
              }}
              onClick={() => setSelectedImage(project.image)}
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

      {/* Animación de la imagen ampliada */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2000,
              cursor: 'zoom-out'
            }}
          >
            <motion.img
              src={selectedImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{
                maxWidth: '90%',
                maxHeight: '85vh',
                borderRadius: '8px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}