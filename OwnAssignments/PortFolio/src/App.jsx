import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import AchievementShowcase from './components/AchievementsShowcase'


const App = () => {
  return (
    <>
      
 <main className="overflow-hidden  bg-black tracking-tighter text-gray-200 antialiased">
         <Navbar />
         <HeroSection />
         <About />
         <Projects />
         <Skills />
         <AchievementShowcase />
       </main>

    </>
  )
}

export default App


