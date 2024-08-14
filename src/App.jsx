import Profile from './components/Profile'
import Main from './components/Main'
import { useState, useEffect, useRef } from 'react'

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const cursorRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === 'about') {
      let offset = -100;
      const top = aboutRef.current.getBoundingClientRect().top + window.scrollY + offset;
      window.scroll({ top, behavior: 'smooth' });
    }
    
    if (section === 'experience') {
      let offset = -50;
      const top = experienceRef.current.getBoundingClientRect().top + window.scrollY + offset;
      window.scroll({ top, behavior: 'smooth' });
    }

    if (section === 'projects') {
      let offset = -50;
      const top = projectRef.current.getBoundingClientRect().top + window.scrollY + offset;
      window.scroll({ top, behavior: 'smooth' });
    }
  }

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (!cursorRef.current) return;
      let { clientX, clientY } = e;
      clientX += window.scrollX;
      clientY += window.scrollY;
      cursorRef.current.style.setProperty("--x", `${clientX}px`);
      cursorRef.current.style.setProperty("--y", `${clientY}px`);
    }

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('scroll', handleScroll);
    }
  })
  
  return (
    <div ref={cursorRef} className='main p-24 flex'>
      <Profile scrollToSection={scrollToSection} scrollPosition={scrollPosition} />
      <Main aboutRef={aboutRef} experienceRef={experienceRef} projectRef={projectRef}/>
    </div>
  )
}

export default App
