import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Notes from './components/Notes'
import Projects from './components/Projects'
import ScrollProgress from './components/ScrollProgress'
import Skills from './components/Skills'
import { useTheme } from './hooks/useTheme'
import './App.css'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <ScrollProgress />
      <Nav theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Notes />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
