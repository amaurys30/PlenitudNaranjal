'use client'

import { useState } from 'react'

import {
  X,
  ChevronLeft,
  ChevronRight,
  Expand,
} from 'lucide-react'

import '@/styles/projects/campamentos/campGallery.css'

const galleryImages = [
  {
    image:
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1600&auto=format&fit=crop',

    title: 'Momentos de enseñanza',

    description:
      'Espacios donde los niños aprendían principios bíblicos y valores para su vida diaria.',
  },

  {
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop',

    title: 'Juegos y dinámicas',

    description:
      'Actividades llenas de alegría que fortalecían la amistad y el trabajo en equipo.',
  },

  {
    image:
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1600&auto=format&fit=crop',

    title: 'Tiempo en comunidad',

    description:
      'Cada niño compartía experiencias únicas rodeado de amor y compañerismo.',
  },

  {
    image:
      'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1600&auto=format&fit=crop',

    title: 'Actividades recreativas',

    description:
      'Momentos de diversión sana que hacían del campamento algo inolvidable.',
  },

  {
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',

    title: 'Trabajo en equipo',

    description:
      'Los niños aprendían a ayudarse mutuamente y construir relaciones saludables.',
  },

  {
    image:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1600&auto=format&fit=crop',

    title: 'Experiencias que transforman',

    description:
      'Cada actividad dejaba enseñanzas y recuerdos que permanecen en el corazón.',
  },
]

export default function CampGallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (index) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    )
  }

  return (
    <section className="camp-gallery"
    id="galeria">

      {/* BACKGROUND EFFECTS */}

      <div className="camp-gallery-blur blur-1" />
      <div className="camp-gallery-blur blur-2" />

      <div className="camp-gallery-container">

        {/* HEADER */}

        <div className="camp-gallery-header">

          <span className="camp-gallery-label">
            Recuerdos del campamento
          </span>

          <h2>
            Experiencias que dejan
            <span> huella</span>
          </h2>

          <p>
            Cada fotografía representa momentos reales de alegría,
            enseñanza, amistad y crecimiento espiritual vividos
            durante nuestros campamentos.
          </p>

        </div>

        {/* GRID */}

        <div className="camp-gallery-grid">

          {galleryImages.map((item, index) => (

            <div
              key={index}
              className={`camp-gallery-card ${
                index === 0 || index === 3
                  ? 'large'
                  : ''
              }`}
              onClick={() => openModal(index)}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="camp-gallery-overlay">

                <div className="camp-gallery-content">

                  <span>
                    <Expand size={18} />
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* MODAL */}

      {selectedImage !== null && (

        <div className="camp-gallery-modal">

          <div
            className="camp-gallery-backdrop"
            onClick={closeModal}
          />

          <button
            className="camp-gallery-close"
            onClick={closeModal}
          >
            <X size={28} />
          </button>

          <button
            className="camp-gallery-nav left"
            onClick={prevImage}
          >
            <ChevronLeft size={30} />
          </button>

          <button
            className="camp-gallery-nav right"
            onClick={nextImage}
          >
            <ChevronRight size={30} />
          </button>

          <div className="camp-gallery-modal-content">

            <div className="camp-gallery-modal-image">

              <img
                src={galleryImages[selectedImage].image}
                alt={
                  galleryImages[selectedImage].title
                }
              />

            </div>

            <div className="camp-gallery-modal-info">

              <span>
                Imagen {selectedImage + 1} de{' '}
                {galleryImages.length}
              </span>

              <h3>
                {
                  galleryImages[selectedImage]
                    .title
                }
              </h3>

              <p>
                {
                  galleryImages[selectedImage]
                    .description
                }
              </p>

            </div>

          </div>

        </div>

      )}

    </section>
  )
}
