'use client'

import {
  HeartHandshake,
  BookOpen,
  Trees,
  Sparkles,
} from 'lucide-react'

import '@/styles/projects/campamentos/campAbout.css'

const values = [
  {
    icon: <BookOpen size={26} />,
    title: 'Formación espiritual',
    text: 'Compartimos enseñanzas basadas en la Palabra de Dios para fortalecer la fe y los valores desde la infancia.',
  },

  {
    icon: <HeartHandshake size={26} />,
    title: 'Convivencia y armonía',
    text: 'Creamos espacios donde los niños aprenden a convivir, compartir y construir amistades sanas.',
  },

  {
    icon: <Trees size={26} />,
    title: 'Naturaleza y comunidad',
    text: 'El entorno natural de Naranjal se convierte en un escenario perfecto para aprender y crecer.',
  },

  {
    icon: <Sparkles size={26} />,
    title: 'Experiencias inolvidables',
    text: 'Cada actividad deja recuerdos, aprendizajes y momentos que marcan positivamente sus vidas.',
  },
]

export default function CampAbout() {
  return (
    <section className="camp-about">

      <div className="camp-about-bg-glow glow-a"></div>
      <div className="camp-about-bg-glow glow-b"></div>

      <div className="camp-about-container">

        {/* LEFT */}

        <div className="camp-about-content">

          <span className="camp-about-label">
            Sobre el campamento
          </span>

          <h2>
            Una experiencia que
            <span> transforma vidas</span>
          </h2>

          <p className="camp-about-text">
            Los Campamentos de Niños de Plenitud NR nacen
            con el propósito de brindar a los niños de la
            vereda Naranjal un espacio lleno de aprendizaje,
            amistad, fe y crecimiento personal.
          </p>

          <p className="camp-about-text">
            Durante cada jornada vivimos momentos de
            enseñanza bíblica, dinámicas grupales,
            actividades recreativas y experiencias que
            fortalecen los valores, la convivencia y el
            amor por la comunidad.
          </p>

          <div className="camp-about-highlight">

            <div className="camp-highlight-line"></div>

            <p>
              “Creemos que sembrar valores y esperanza
              en la niñez es construir un mejor futuro
              para toda la comunidad.”
            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="camp-about-values">

          {values.map((item, index) => (
            <div
              className="camp-value-card"
              key={index}
            >

              <div className="camp-value-icon">
                {item.icon}
              </div>

              <div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}