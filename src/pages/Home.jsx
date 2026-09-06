import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Accomplishments from '../components/Accomplishments'
import Projects from '../components/Projects'
import TravelMap from '../components/TravelMap'
import Hobbies from '../components/Hobbies'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Accomplishments />
        <Projects />
        <TravelMap />
        <Hobbies />
        <Contact />
      </main>
    </>
  )
}
