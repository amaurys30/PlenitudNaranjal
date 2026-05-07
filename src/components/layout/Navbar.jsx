'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Menu, X } from 'lucide-react'

export default function Navbar(){

  const [scrolled,setScrolled] = useState(false)

  const [menuOpen,setMenuOpen] = useState(false)

  useEffect(()=>{

    const handleScroll = ()=>{
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll',handleScroll)

    return ()=> window.removeEventListener('scroll',handleScroll)

  },[])

  return(

    <>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

        {/* LOGO */}

        <Link href="/" className="logo">

          <Image
            src="/images/logo.jpeg"
            alt="Logo Nutra Asociación"
            width={45}
            height={45}
            className="logo-image"
          />

          <span className="logo-text">
            Plenitud <span>NR</span>
          </span>

        </Link>

        {/* DESKTOP MENU */}

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

        {/* MOBILE BUTTON */}

        <button
          className="menu-btn"
          onClick={()=> setMenuOpen(true)}
        >
          <Menu size={30}/>
        </button>

      </nav>

      {/* MOBILE MENU */}

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>

        <button
          className="close-btn"
          onClick={()=> setMenuOpen(false)}
        >
          <X size={30}/>
        </button>

        <Link
          href="/nosotros"
          onClick={()=> setMenuOpen(false)}
        >
          Nosotros
        </Link>

        <Link
          href="/proyectos"
          onClick={()=> setMenuOpen(false)}
        >
          Proyectos
        </Link>

        <Link
          href="/eventos"
          onClick={()=> setMenuOpen(false)}
        >
          Eventos
        </Link>

        <Link
          href="/galeria"
          onClick={()=> setMenuOpen(false)}
        >
          Galería
        </Link>

        <Link
          href="/contacto"
          onClick={()=> setMenuOpen(false)}
        >
          Contacto
        </Link>

        <Link
          href="/donaciones"
          className="mobile-btn"
          onClick={()=> setMenuOpen(false)}
        >
          Donar
        </Link>

      </div>

    </>

  )
}