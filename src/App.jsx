import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import Navbar from  "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Skills from "./components/skills/SkillSection"
import WorkExperience from "./components/experience/WorkExperience"
import ProjectSection from './components/project/ProjectSection'
import  Contact  from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Education from './components/education/Education'
import JourneySection from './components/journey/JourneySection'
import CertificationSection from './components/certificate/CertificationSection'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Skills/>
      <WorkExperience/>
      <ProjectSection/>
      <JourneySection/>
      <CertificationSection/>
      <Contact/>
      <Footer/>
      <Analytics />
    </div>
  )
}

export default App