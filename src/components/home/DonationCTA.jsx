import Link from 'next/link'

export default function DonationCTA() {
  return (
    <section className="donation-section">
      <div className="donation-container">

        <span className="donation-tag">
          APOYA NUESTRA MISIÓN
        </span>

        <h2>
          Tu ayuda puede transformar vidas
        </h2>

        <p>
          Cada aporte permite continuar apoyando a niños,
          familias y proyectos comunitarios en la vereda Naranjal.
        </p>

        <div className="donation-buttons">
          <Link href="/donaciones" className="btn-primary">
            Donar Ahora
          </Link>

          <Link href="/contacto" className="btn-secondary">
            Ser Voluntario
          </Link>
        </div>

      </div>

      <div className="donation-circle"></div>
    </section>
  )
}
