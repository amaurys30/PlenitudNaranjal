import Navbar from '@/components/layout/Navbar'

import ProjectsHero from '@/components/projects/ProjectsHero'
import ProjectsPanels from '@/components/projects/ProjectsPanels'
import ProjectsDetail from '@/components/projects/ProjectsDetail'
import ProjectsParticipate from '@/components/projects/ProjectsParticipate'
/*import ProjectsCTA from '@/components/projects/ProjectsCTA'*/

import DonationCTA from '@/components/home/DonationCTA'
import Impact from '@/components/home/Impact'
import Footer from '@/components/layout/Footer'

export default function ProyectosPage() {
  return (
    <>

    <Navbar/>
      <ProjectsHero />
      <ProjectsPanels/>
      <ProjectsDetail/>

      <Impact />
      <ProjectsParticipate/>
      <DonationCTA />
      <Footer/>
      
    </>
  )
}
