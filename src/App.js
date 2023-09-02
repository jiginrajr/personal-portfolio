import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Experience from './components/Experience/Experience'
import { skills, exploringSkills } from './portfolio';
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills title="Skills" elements={skills} />
        <Experience/>
        <Skills title="Currently Exploring" elements={exploringSkills} />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
