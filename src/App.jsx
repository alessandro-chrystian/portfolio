import { useState, useEffect, useRef } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Hero from './components/Hero'
import ParticlesComponent from './components/Particles'

function App() {

  useEffect(()=> {
    Aos.init({
      duration: 1000,
      easing: "ease-out-cubic"
    })
  })

  const [isDark, setIsDark] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [arrowDownIsVisible, setArrowDownIsVisible] = useState(true)


  useEffect(() => {
    const body = document.body
    if(isDark) {
      body.classList.remove('light-mode')
      body.classList.add('dark-mode')
    } else {
      body.classList.add('light-mode')
      body.classList.remove('dark-mode')
    }
  }, [isDark])

  const toggleVisibility = () => {
    if(window.scrollY > 300){
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      removeEventListener("scroll", toggleVisibility)
    }
  }, [])


  function togglePageView() {
    setIsDark(prevValue => !prevValue)
  }


  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollPosition = window.scrollY
      
      const isScrollable = documentHeight - scrollPosition > windowHeight

      setArrowDownIsVisible(isScrollable)
    }   

    window.addEventListener('scroll', handleScroll)

    return () => {
      removeEventListener('scroll', handleScroll)
    }

  }, [])

  return (
    <>      
      <div className={`w-full h-full relative z-50 transition-all duration-500 ${isDark ? "bg-dark-background text-dark-copy" : "bg-background text-copy"} overflow-hidden`}>
      <ParticlesComponent isDark={isDark} />
      <span onClick={scrollToTop} className={`to-top fixed ${isVisible ? "opacity-50 hover:opacity-100" : "hidden"} z-10 right-8 bottom-20 bg-dark-border w-10 h-10 flex items-center justify-center text-primary-content rounded-full`}><FontAwesomeIcon icon={faArrowUp} /></span>
      {
        arrowDownIsVisible ? <div className="flex justify-center items-center">
        <span className={`fixed bottom-[-5px] ${isDark ? "bg-dark-border" : "bg-border"} w-full blur-sm h-[10%] opacity-95 z-10 $`}></span>
        <span className={`arrow-down z-10 fixed bottom-[10px] ${isDark ? "text-border" : "text-dark-border"} text-4xl fixed`}><FontAwesomeIcon icon={faArrowDown} /></span>
      </div> : null
      }
      
      <Header togglePageView={togglePageView} isDark={isDark} />
      <Hero isDark={isDark} />
      <About />
      <Services isDark={isDark} />
      <Portfolio isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer />
      </div>
    </>
  )
}

export default App
