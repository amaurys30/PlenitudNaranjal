'use client'

import Link from 'next/link'

import {
  ArrowRight,
  Heart,
  TentTree,
  Sparkles,
} from 'lucide-react'

import '@/styles/projects/campamentos/campHero.css'

export default function CampHero() {
  return (

    <section className="camp-hero">

      {/* BACKGROUND */}

      <div className="camp-hero-bg" />

      <div className="camp-hero-overlay" />

      <div className="camp-hero-glow glow-1" />

      <div className="camp-hero-glow glow-2" />

      {/* FLOATING ELEMENTS */}

      <div className="camp-hero-floating">

        <div className="camp-floating-item">
            <div className="camp-floating-icon">
            ✝️
            </div>

            <div className="camp-floating-tooltip">
            <h4>Fe y esperanza</h4>

            <p>
                Enseñamos a los niños principios
                basados en la Palabra de Dios.
            </p>
            </div>
        </div>

        <div className="camp-floating-item delay-1">
            <div className="camp-floating-icon">
            🤝
            </div>

            <div className="camp-floating-tooltip">
            <h4>Amistad y armonía</h4>

            <p>
                Fomentamos la unión, el respeto
                y el trabajo en equipo.
            </p>
            </div>
        </div>

        <div className="camp-floating-item delay-2">
            <div className="camp-floating-icon">
            🌱
            </div>

            <div className="camp-floating-tooltip">
            <h4>Crecimiento</h4>

            <p>
                Cada actividad ayuda a formar
                mejores niños para el futuro.
            </p>
            </div>
        </div>

    </div>

      {/* CONTENT */}

      <div className="camp-hero-content">

        <div className="camp-hero-badge">

          <TentTree size={16} />

          <span>
            Proyecto social · Campamentos de niños
          </span>

        </div>

        <h1>

          Transformando vidas a través de la
          <span> fe, amistad y esperanza</span>

        </h1>

        <p>
          Cada año reunimos a los niños de la vereda Naranjal
          en una experiencia inolvidable llena de enseñanzas,
          juegos, armonía y crecimiento espiritual.
        </p>

        {/* TAGS */}

        <div className="camp-hero-tags">

          <div className="camp-tag">
            ✝️ Palabra de Dios
          </div>

          <div className="camp-tag">
            🤝 Valores
          </div>

          <div className="camp-tag">
            🌿 Naturaleza
          </div>

          <div className="camp-tag">
            ❤️ Comunidad
          </div>

        </div>

        {/* BUTTONS */}

        <div className="camp-hero-buttons">

          <Link
            href="/donar"
            className="camp-btn-primary"
          >

            <Heart size={18} />

            Apoyar proyecto

          </Link>

          <Link
            href="#galeria"
            className="camp-btn-secondary"
          >

            Ver galería

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>

      {/* SCROLL INDICATOR */}

      <div className="camp-scroll">

        <span>
          Descubrir más
        </span>

        <div className="camp-scroll-line" />

      </div>

    </section>
  )
}
