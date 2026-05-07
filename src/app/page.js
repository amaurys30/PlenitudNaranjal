import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Projects from '@/components/home/Projects'
import Impact from '@/components/home/Impact'
import Footer from '@/components/layout/Footer'


export default function HomePage(){

  return(

    <>

      <Navbar/>

      <Hero/>

      <About/>

      

      <Impact />
      <Projects/>

      <Footer/>

    </>

  )
}