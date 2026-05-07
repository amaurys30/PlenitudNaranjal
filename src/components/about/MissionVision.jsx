'use client'

import { Compass, Eye } from 'lucide-react'
import { motion } from 'framer-motion'

export default function MissionVision() {

  return (

    <section className="mission-vision">

      <div className="mission-vision-bg"></div>

      <div className="mission-vision-container">

        {/* IZQUIERDA */}

        <motion.div
          className="mission-card"
          initial={{ opacity:0, y:50 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:.7 }}
          viewport={{ once:true }}
        >

          <div className="mission-icon">
            <Compass size={34}/>
          </div>

          <span className="mission-label">
            NUESTRA MISIÓN
          </span>

          <h2>
            Servir con amor,
            fe y propósito
          </h2>

          <p>
            En Plenitud NR trabajamos para fortalecer
            la comunidad de la vereda Naranjal mediante
            proyectos sociales, espirituales y educativos
            que promuevan bienestar, esperanza y unidad.
          </p>

        </motion.div>

        {/* DERECHA */}

        <motion.div
          className="vision-card"
          initial={{ opacity:0, y:50 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:.8, delay:.15 }}
          viewport={{ once:true }}
        >

          <div className="vision-icon">
            <Eye size={34}/>
          </div>

          <span className="vision-label">
            NUESTRA VISIÓN
          </span>

          <h2>
            Construir una
            comunidad plena
          </h2>

          <p>
            Aspiramos a convertirnos en una asociación
            referente en transformación comunitaria,
            impulsando espacios de fe, servicio y desarrollo
            sostenible para las futuras generaciones.
          </p>

        </motion.div>

      </div>

    </section>

  )

}
