'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      
      <div className="hero-overlay"></div>

      <div className="hero-content">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">
            🌿 Vereda Naranjal · Colombia
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Fe, Servicio
          <br />
          y Comunidad
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Somos una asociación sin ánimo de lucro que transforma
          vidas en la vereda de Naranjal a través de educación,
          alimentación y agricultura sostenible.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Link href="/proyectos" className="btn-primary">
            Conoce nuestros proyectos
          </Link>

          <Link href="/donaciones" className="btn-secondary">
            Apoyar la causa
          </Link>
        </motion.div>

      </div>

    </section>
  )
}