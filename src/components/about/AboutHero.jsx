'use client'

import { motion } from 'framer-motion'

export default function AboutHero(){

  return(

    <section className="about-hero">

      <div className="about-hero-overlay"></div>

      <div className="about-hero-content">

        <motion.span
          className="about-hero-badge"
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{duration:.6}}
        >
          SOBRE NOSOTROS
        </motion.span>

        <motion.h1
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:.8}}
        >
          Transformando comunidades
          <br/>
          desde la fe y el servicio
        </motion.h1>

        <motion.div
          className="about-hero-line"
          initial={{width:0}}
          animate={{width:'120px'}}
          transition={{delay:.5,duration:.8}}
        />

        <motion.p
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{delay:.3,duration:.8}}
        >
          Plenitud NR nace con el propósito de servir,
          acompañar y construir esperanza en la vereda
          de Naranjal mediante proyectos sociales,
          educativos y comunitarios.
        </motion.p>

        <motion.a
          href="#historia"
          className="about-hero-btn"
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{delay:.5,duration:.8}}
        >
          Conoce nuestra historia
        </motion.a>

      </div>

      <div className="scroll-indicator">
        <span></span>
      </div>

    </section>

  )

}
