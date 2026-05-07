import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Projects from '@/components/home/Projects'
import Impact from '@/components/home/Impact'
import DonationCTA from '@/components/home/DonationCTA'
import ContactSection from '@/components/home/ContactSection'
import Footer from '@/components/layout/Footer'



export default function HomePage(){

  return(

    <>

      <Navbar/>

      <Hero/>

      <About/>

      <Projects/>

      <Impact />

      <DonationCTA />
      
      <ContactSection />

      <Footer/>

    </>

  )
}