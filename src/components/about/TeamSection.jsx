'use client'

import { useState } from 'react'

import {
  X,
  Heart,
  Sparkles,
  Users
} from 'lucide-react'

import { motion, AnimatePresence } from 'framer-motion'

const members = [

  {
    id:1,
    name:'Delia Flor Castro Torres',
    role:'Presidente ',
    image:'/images/equipo/delia.jpeg',
    description:
    'Lidera los proyectos sociales y coordina las actividades comunitarias de Plenitud NR.',
    phrase:
    '“Servir a la comunidad transforma vidas.”'
  },

  {
    id:2,
    name:'Fidel Enrique Castro Torres',
    role:'Vicepresidente',
    image:'/images/equipo/Fidel.jpeg',
    description:
    'Encargado de organizar eventos, voluntariados y actividades para niños y familias.',
    phrase:
    '“Cada pequeño acto genera esperanza.”'
  },

  {
    id:3,
    name:'Mayerlis Castro De Arco',
    role:'Tesorera',
    image:'/images/equipo/maye.jpeg',
    description:
    'Participa en proyectos de agricultura y sostenibilidad comunitaria.',
    phrase:
    '“Trabajamos por un futuro sostenible.”'
  },

  {
    id:4,
    name:'María Elsi De Arco Nisperusa',
    role:'Supervisora',
    image:'/images/equipo/maria.jpeg',
    description:
    'Participa en proyectos de agricultura y sostenibilidad comunitaria.',
    phrase:
    '“Trabajamos por un futuro sostenible.”'
  },

  {
    id:5,
    name:'Daimer Castro Vega',
    role:'Secretario',
    image:'/images/equipo/Daimer.jpeg',
    description:
    'Participa en proyectos de agricultura y sostenibilidad comunitaria.',
    phrase:
    '“Trabajamos por un futuro sostenible.”'
  },

  {
    id:6,
    name:'Rafael Antonio Castro Torres',
    role:'Fiscal',
    image:'/images/equipo/rafael.jpeg',
    description:
    'Apoya procesos educativos y recreativos para fortalecer la comunidad.',
    phrase:
    '“La unión crea oportunidades.”'
  },

  {
    id:7,
    name:'Rebekah Sanchez Cruz ',
    role:'Asociada',
    image:'/images/equipo/user.jpg',
    description:
    'Apoya procesos educativos y recreativos para fortalecer la comunidad.',
    phrase:
    '“La unión crea oportunidades.”'
  },

  {
    id:8,
    name:'Myrna I. Segarra Silva ',
    role:'Asociada',
    image:'/images/equipo/user.jpg',
    description:
    'Apoya procesos educativos y recreativos para fortalecer la comunidad.',
    phrase:
    '“La unión crea oportunidades.”'
  },

  {
    id:9,
    name:'Amaurys Castro De Arco',
    role:'Asociado',
    image:'/images/equipo/Mao.jpeg',
    description:
    'Apoya procesos educativos y recreativos para fortalecer la comunidad.',
    phrase:
    '“La unión crea oportunidades.”'
  }

]

export default function TeamSection(){

  const [selectedMember,setSelectedMember] = useState(null)

  return(

    <section className="team-section">

      {/* DECORACION */}

      <div className="team-gradient"></div>

      <div className="team-container">

        {/* HEADER */}

        <motion.div
          className="team-header"
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:.7 }}
          viewport={{ once:true }}
        >

          <span>
            CONOCE NUESTRO EQUIPO
          </span>

          <h2>
            Personas que
            inspiran transformación
          </h2>

          <p>
            Conoce a quienes trabajan cada día
            para construir comunidad, esperanza
            y bienestar en Naranjal.
          </p>

        </motion.div>

        {/* GRID */}

        <div className="team-grid">

          {members.map((member,index)=>(

            <motion.div
              key={member.id}
              className="team-card"
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{
                duration:.6,
                delay:index * .12
              }}
              viewport={{ once:true }}
              onClick={() => setSelectedMember(member)}
            >

              <div className="team-image-wrapper">

                <img
                  src={member.image}
                  alt={member.name}
                />

                <div className="team-overlay">

                  <div className="team-overlay-icon">
                    <Sparkles size={26}/>
                  </div>

                </div>

              </div>

              <div className="team-info">

                <h3>
                  {member.name}
                </h3>

                <p>
                  {member.role}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* MODAL */}

      <AnimatePresence>

        {selectedMember && (

          <motion.div
            className="team-modal-backdrop"
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >

            <motion.div
              className="team-modal"
              initial={{
                opacity:0,
                scale:.85,
                y:40
              }}
              animate={{
                opacity:1,
                scale:1,
                y:0
              }}
              exit={{
                opacity:0,
                scale:.9
              }}
              transition={{ duration:.35 }}
            >

              <button
                className="team-close"
                onClick={() => setSelectedMember(null)}
              >
                <X size={26}/>
              </button>

              <div className="team-modal-image">

                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                />

              </div>

              <div className="team-modal-content">

                <div className="team-modal-badge">

                  <Users size={18}/>

                </div>

                <h2>
                  {selectedMember.name}
                </h2>

                <span>
                  {selectedMember.role}
                </span>

                <p>
                  {selectedMember.description}
                </p>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>

  )

}
