import Navbar from '@/components/layout/Navbar'

import CampHero from '@/components/projects/campamentos/CampHero'
import CampAbout from '@/components/projects/campamentos/CampAbout'
import CampGallery from '@/components/projects/campamentos/CampGallery'
import CampTimeline from '@/components/projects/campamentos/CampTimeline'
import CampOtherProjets from '@/components/projects/campamentos/CampOtherProjects'
import CampCollaborators from '@/components/projects/campamentos/CampCollaborators'


import Footer from '@/components/layout/Footer'

export default function CampamentosPage() {
  return (
    <>

      <CampHero />
      <CampAbout/>
      <CampGallery/>
      <CampTimeline/>
      <CampCollaborators/>
      <CampOtherProjets/>
      <Footer/>
      
    </>
  )
}


