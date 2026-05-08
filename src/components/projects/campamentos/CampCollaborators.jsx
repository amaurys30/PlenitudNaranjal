'use client'

import {
  Church,
  HeartHandshake,
  Building2,
  Sparkles,
} from 'lucide-react'

import '@/styles/projects/campamentos/campCollaborators.css'

const collaborators = [
  {
    icon: <HeartHandshake />,
    color: '#d89a3c',
    name: 'Asociación Plenitud NR',
    role: 'Organización principal',
    description:
      'Lidera la planeación, coordinación y desarrollo integral del campamento, impulsando espacios de formación espiritual y social para los niños.',
  },

  {
    icon: <Church />,
    color: '#49a36d',
    name: 'Iglesia Defensores de la Fe Cristiana de Naranjal',
    role: 'Aliado comunitario',
    description:
      'Apoya el desarrollo espiritual, la logística local y el acompañamiento comunitario durante cada edición del campamento.',
  },

  {
    icon: <Building2 />,
    color: '#4c8dff',
    name: 'Iglesia Defensores de la Fe · Puerto Rico',
    role: 'Colaborador internacional',
    description:
      'Contribuye mediante apoyo humano, acompañamiento ministerial y respaldo para fortalecer el impacto del proyecto.',
  },
]

export default function CampCollaborators() {
  return (
    <section className="camp-collaborators-section">

      <div className="camp-collab-glow glow-1" />
      <div className="camp-collab-glow glow-2" />

      <div className="camp-collaborators-container">

        {/* HEADER */}

        <div className="camp-collaborators-header">

          <div className="camp-collab-mini">

            <Sparkles size={16} />

            <span>
              Red de apoyo
            </span>

          </div>

          <h2>
            Organizaciones que hacen
            <span> posible este proyecto</span>
          </h2>

          <p>
            El campamento es posible gracias al trabajo conjunto
            entre organizaciones, iglesias y personas comprometidas
            con el bienestar y la formación de los niños de Naranjal.
          </p>

        </div>

        {/* CARDS */}

        <div className="camp-collaborators-grid">

          {collaborators.map((item, index) => (
            <div
              className="camp-collaborator-card"
              key={index}
            >

              <div className="camp-collab-card-bg" />

              <div
                className="camp-collaborator-icon"
                style={{
                  color: item.color,
                  borderColor: `${item.color}30`,
                  boxShadow: `0 15px 35px ${item.color}20`,
                }}
              >
                {item.icon}
              </div>

              <div className="camp-collaborator-content">

                <span>
                  {item.role}
                </span>

                <h3>
                  {item.name}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* CTA */}

        <div className="camp-collaborators-cta">

          <h3>
            ¿Tu organización desea apoyar este proyecto?
          </h3>

          <p>
            Estamos abiertos a nuevas alianzas que compartan
            nuestra visión de transformación social, formación
            espiritual y apoyo a la niñez.
          </p>

          <a href="/contacto">
            Convertirse en colaborador
          </a>

        </div>

      </div>

    </section>
  )
}
