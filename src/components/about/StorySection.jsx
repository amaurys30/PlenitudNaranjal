'use client'

import { motion } from 'framer-motion'

export default function StorySection(){

  return(

    <section
      className="story-section"
      id="historia"
    >

      <div className="story-container">

        {/* IMAGE */}

        <motion.div
          className="story-image-wrapper"
          initial={{opacity:0,x:-80}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:.9}}
          viewport={{once:true}}
        >

          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1400"
            alt="Historia Plenitud NR"
            className="story-image"
          />

          <div className="story-floating-card">

            <h3>+5 años</h3>

            <p>
              sirviendo a la comunidad
              con amor y compromiso
            </p>

          </div>

        </motion.div>

        {/* CONTENT */}

        <motion.div
          className="story-content"
          initial={{opacity:0,x:80}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:.9}}
          viewport={{once:true}}
        >

          <span className="story-label">
            NUESTRA HISTORIA
          </span>

          <h2>
            Una misión nacida
            desde el servicio
            y la esperanza
          </h2>

          <p>
            Plenitud NR nació como una iniciativa
            comunitaria impulsada por el deseo de
            transformar la realidad de muchas familias
            en la vereda de Naranjal.
          </p>

          <p>
            Con el tiempo, la asociación empezó a
            desarrollar proyectos enfocados en la
            educación, la alimentación, la integración
            comunitaria y el fortalecimiento espiritual,
            creando espacios donde las personas pudieran
            crecer con dignidad y esperanza.
          </p>

          {/* STATS */}

          <div className="story-stats">

            <div className="story-stat">

              <h3>120+</h3>

              <span>
                familias impactadas
              </span>

            </div>

            <div className="story-stat">

              <h3>15+</h3>

              <span>
                eventos comunitarios
              </span>

            </div>

            <div className="story-stat">

              <h3>100%</h3>

              <span>
                compromiso social
              </span>

            </div>

          </div>

          {/* QUOTE */}

          <div className="story-quote">

            <p>
              “Servir a la comunidad es sembrar
              esperanza en cada generación.”
            </p>

          </div>

        </motion.div>

      </div>

    </section>

  )

}
