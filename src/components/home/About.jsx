'use client'

import { motion } from 'framer-motion'

export default function About() {

  return (
    <section className="about">

      <div className="about-container">

        {/* IMAGEN */}

        <motion.div
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <img
            src="/images/about.jpg"
            alt="Comunidad Plenitud NR"
            className="about-image"
          />

          <div className="about-badge">
            <h3>2025</h3>
            <p>Desde el inicio</p>
          </div>

        </motion.div>

        {/* TEXTO */}

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="section-badge">
            Quiénes somos
          </span>

          <h2>
            Una comunidad unida
            <br />
            con propósito
          </h2>

          <p>
            Plenitud NR es una asociación sin ánimo de lucro
            comprometida con el bienestar de la vereda Naranjal.
            Trabajamos a través de la educación, la alimentación,
            la agricultura sostenible y el servicio comunitario.
          </p>

          <p>
            Creemos en el poder de la armonía, la fe y el trabajo
            colectivo para transformar vidas y fortalecer nuestra
            comunidad de manera sostenible.
          </p>

          <div className="about-values">

            <span>🤝 Armonía</span>
            <span>🌱 Sostenibilidad</span>
            <span>❤️ Servicio</span>
            <span>✝️ Fe</span>
            <span>🏘️ Comunidad</span>
            <span>🌟 Propósito</span>

          </div>

          <div className="about-quote">

            <p>
              “Crecemos juntos para servir mejor
              a nuestra comunidad y a la gloria de Dios.”
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  )
}