'use client'

import {
  ClipboardCheck,
  BookOpen,
  Users,
  Trophy,
  HeartHandshake,
  ShieldCheck,
} from 'lucide-react'

import '@/styles/projects/campamentos/campTimeline.css'

const processSteps = [
  {
    icon: <ClipboardCheck />,
    color: '#d89a3c',
    title: 'Planeación y logística',
    description:
      'Organizamos cronogramas, materiales, alimentación, seguridad y equipos de apoyo para garantizar una experiencia ordenada y segura.',
  },

  {
    icon: <BookOpen />,
    color: '#49a36d',
    title: 'Diseño pedagógico',
    description:
      'Cada actividad y enseñanza es preparada con enfoque formativo, espiritual y emocional adaptado a la edad de los niños.',
  },

  {
    icon: <Users />,
    color: '#4c8dff',
    title: 'Integración comunitaria',
    description:
      'Se fortalecen vínculos entre niños, voluntarios, familias e iglesias colaboradoras mediante dinámicas grupales.',
  },

  {
    icon: <Trophy />,
    color: '#ff7a59',
    title: 'Actividades experienciales',
    description:
      'Los participantes aprenden a través de retos, juegos, talleres y experiencias prácticas de convivencia.',
  },

  {
    icon: <HeartHandshake />,
    color: '#ff4fa3',
    title: 'Acompañamiento humano',
    description:
      'El equipo de servicio brinda orientación emocional, apoyo espiritual y acompañamiento cercano durante todo el proceso.',
  },

  {
    icon: <ShieldCheck />,
    color: '#00b8a9',
    title: 'Seguimiento e impacto',
    description:
      'Después del campamento se mantiene contacto con la comunidad para fortalecer el crecimiento de los niños.',
  },
]

export default function CampProcess() {
  return (
    <section className="camp-process-section">

      <div className="camp-process-glow glow-left" />
      <div className="camp-process-glow glow-right" />

      <div className="camp-process-container">

        <div className="camp-process-header">

          <span className="camp-process-label">
            Metodología del proyecto
          </span>

          <h2>
            Cómo desarrollamos el
            <span> campamento</span>
          </h2>

          <p>
            Nuestro enfoque combina organización, formación espiritual,
            acompañamiento humano y actividades experienciales para
            generar un impacto real y duradero en cada niño.
          </p>

        </div>

        <div className="camp-process-grid">

          {processSteps.map((step, index) => (
            <div
              className="camp-process-card"
              key={index}
            >

              <div
                className="camp-process-icon"
                style={{
                  color: step.color,
                  borderColor: `${step.color}40`,
                  boxShadow: `0 10px 30px ${step.color}25`,
                }}
              >
                {step.icon}
              </div>

              <div className="camp-process-content">

                <span>
                  Paso {index + 1}
                </span>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}
