'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar(){

  const [scrolled,setScrolled] = useState(false)

  useEffect(()=>{

    const handleScroll = ()=>{
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll',handleScroll)

    return ()=> window.removeEventListener('scroll',handleScroll)

  },[])

  return(

    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

      <Link href="/" className="logo">
        Plenitud <span>NR</span>
      </Link>

      <div className="nav-links">

        <Link href="/nosotros">Nosotros</Link>

        <Link href="/proyectos">Proyectos</Link>

        <Link href="/eventos">Eventos</Link>

        <Link href="/galeria">Galería</Link>

        <Link href="/contacto">Contacto</Link>

        <Link href="/donaciones" className="btn-nav">
          Donar
        </Link>

      </div>

    </nav>

  )
}
