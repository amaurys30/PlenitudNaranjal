import Navbar from '@/components/layout/Navbar'

import AboutHero from '@/components/about/AboutHero'
import StorySection from '@/components/about/StorySection'
import MissionVision from '@/components/about/MissionVision'
import ValuesSection from '@/components/about/ValuesSection'
import TeamSection from '@/components/about/TeamSection'
import TimelineSection from '@/components/about/TimelineSection'

import Footer from '@/components/layout/Footer'

export default function NosotrosPage(){

  return(

    <>

        <Navbar/>

      <AboutHero/>
      <StorySection/>
      <MissionVision />
      <ValuesSection />
      <TeamSection />
      <TimelineSection />

      <Footer/>
    </>

  )

}
