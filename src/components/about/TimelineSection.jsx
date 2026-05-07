'use client'

import {
  Sparkles,
  HeartHandshake,
  Utensils,
  Users,
  TreePalm
} from 'lucide-react'

import { motion } from 'framer-motion'

const timeline = [

  {
    year:'2019',
    title:'Nacimiento de Plenitud NR',
    icon:<Sparkles size={26}/>,
    text:
    'Inicia la asociación con el propósito de servir a la comunidad de Naranjal mediante actividades sociales y espirituales.'
  },

  {
    year:'2020',
    title:'Comedor Comunitario',
    icon:<Utensils size={26}/>,
    text:
    'Se crean jornadas de alimentación y apoyo para niños y familias de la vereda.'
  },

  {
    year:'2022',
    title:'Eventos y Campamentos',
    icon:<Users size={26}/>,
    text:
    'Se realizan encuentros comunitarios, actividades juveniles y campamentos infantiles.'
  },

  {
    year:'2024',
    title:'Crecimiento y Nuevos Proyectos',
    icon:<TreePalm size={26}/>,
    text:
    'La asociación amplía sus proyectos hacia sostenibilidad, agricultura y fortalecimiento comunitario.'
  }

]

export default function TimelineSection(){

  return(

    <section className="timeline-section">

      {/* DECORACION */}

      <div className="timeline-noise"></div>

      <div className="timeline-container">

        {/* HEADER */}

        <motion.div
          className="timeline-header"
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:.7 }}
          viewport={{ once:true }}
        >

          <span>
            NUESTRA HISTORIA
          </span>

          <h2>
            Un camino construido
            con servicio y comunidad
          </h2>

          <p>
            Cada etapa representa personas,
            sueños y proyectos que han dejado
            huella en Naranjal.
          </p>

        </motion.div>

        {/* LINEA */}

        <div className="timeline-line"></div>

        {/* ITEMS */}

        <div className="timeline-items">

          {timeline.map((item,index)=>(

            <motion.div
              key={index}
              className={`timeline-item ${
                index % 2 === 0
                ? 'left'
                : 'right'
              }`}
              initial={{
                opacity:0,
                y:60
              }}
              whileInView={{
                opacity:1,
                y:0
              }}
              transition={{
                duration:.7,
                delay:index * .15
              }}
              viewport={{ once:true }}
            >

              {/* DOT */}

              <div className="timeline-dot">

                {item.icon}

              </div>

              {/* CARD */}

              <div className="timeline-card">

                <div className="timeline-year">
                  {item.year}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}