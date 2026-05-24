'use client'

import { motion } from 'framer-motion'

const stats = [
  {
    number: '920',
    text: 'platos servidos desde 2024'
  },
  {
    number: '+3',
    text: 'toneladas de panela artesanal producida hasta hoy'
  },
  {
    number: '+150',
    text: 'Niños alcanzados en los campamentos anuales'
  }
]

export default function Impact() {

  return (
    <section className="impact">

      <div className="impact-overlay"></div>

      <motion.div
        className="impact-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >

        <span className="impact-badge">
          Nuestro progreso
        </span>

        <h2>
          El Impacto de Plenitud NR
        </h2>

        <p>
          Cada número representa una vida tocada,
          una familia ayudada y una semilla
          sembrada en la comunidad.
        </p>

      </motion.div>

      <div className="impact-grid">

        {stats.map((item, index) => (

          <motion.div
            className="impact-card"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >

            <h3>{item.number}</h3>

            <p>{item.text}</p>

          </motion.div>

        ))}

      </div>

    </section>
  )
}
