import '../styles/globals.css'

import { Nunito, Cormorant_Garamond } from 'next/font/google'

const nunito = Nunito({
  subsets:['latin'],
  variable:'--font-body'
})

const cormorant = Cormorant_Garamond({
  subsets:['latin'],
  variable:'--font-title'
})

export const metadata = {
  title:'Plenitud NR',
  description:'Fe, servicio y comunidad'
}

export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <body className={`${nunito.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  )
}
