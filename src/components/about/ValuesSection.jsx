'use client'

import { HeartHandshake, Leaf, Sparkles, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const values = [

  {
    icon: <HeartHandshake size={34}/>,
    title: 'Servicio',
    text:
      'Creemos en servir a los demás con humildad, amor y compromiso hacia la comunidad.'
  },

  {
    icon: <Leaf size={34}/>,
    title: 'Armonía',
    text:
      'Promovemos una convivencia sana entre las personas, la naturaleza y la espiritualidad.'
  },

  {
    icon: <Sparkles size={34}/>,
    title: 'Fe',
    text:
      'Nuestra fe inspira cada proyecto y cada acción realizada dentro de la asociación.'
  },

  {
    icon: <Users size={34}/>,
    title: 'Comunidad',
    text:
      'Trabajamos unidos para construir espacios de apoyo, crecimiento y esperanza.'
  }

]

export default function ValuesSection(){

  return(

    <section className="values-section">

      {/* ELEMENTOS DECORATIVOS */}

      <div className="values-blur blur-one"></div>
      <div className="values-blur blur-two"></div>

      <div className="values-container">

        {/* HEADER */}

        <motion.div
          className="values-header"
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:.7 }}
          viewport={{ once:true }}
        >

          <span>
            NUESTRA ESENCIA
          </span>

          <h2>
            Valores que guían
            cada paso de Plenitud NR
          </h2>

          <p>
            Más que proyectos, somos una comunidad
            construida sobre principios que inspiran
            transformación y esperanza.
          </p>

        </motion.div>

        {/* GRID */}

        <div className="values-grid">

          {values.map((value,index)=>(

            <motion.div
              key={index}
              className="value-card"
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{
                duration:.6,
                delay:index * .12
              }}
              viewport={{ once:true }}
            >

              <div className="value-icon">
                {value.icon}
              </div>

              <h3>
                {value.title}
              </h3>

              <p>
                {value.text}
              </p>

              <div className="value-number">
                0{index + 1}
              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}

