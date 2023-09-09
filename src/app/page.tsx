'use client'
import { useState, useRef, useEffect } from 'react'
import Home from "@/components/Home"
import About from "@/components/About"
import Projects from "@/components/Projects"
import IconRow from "@/components/_subcomponents/IconRow"
import useSnapScroll from '@/hooks/useSnapScroll'

import { getSections } from '@/static_data'

export default function Index() {
  const [scroll, setScroll] = useState(0)
  const scrollRef = useRef(0)
  const indexRef = useRef(0)
  const canScroll = useRef(true)
  const homeRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const projRef = useRef<HTMLElement>(null)
  const sections = [
    homeRef,
    aboutRef,
    projRef,
  ]

  const handleWheel = () => {
    if (scroll < 0 && indexRef.current - 1 >= 0) {
      indexRef.current--
    }
    if (scroll > 0 && indexRef.current + 1 < sections.length) {
      indexRef.current++
    }
  }

  useEffect(() => {
    //canScroll.current = false
    handleWheel()
    console.log('Index', indexRef.current)
    sections[indexRef.current].current?.scrollIntoView({ behavior: 'smooth' })
    const timer = setTimeout(() => {
      setScroll(0)
      //canScroll.current = true
    }, 5.8e2)
    return () => clearTimeout(timer)
  }, [scroll])

  return (
    <main 
      className="main"
      onWheel={e => {
        console.log('Delta', e.deltaY)
        setScroll(e.deltaY)
        e.deltaY = 0
      }}
      // onWheel={(e) => {
      //   if (canScroll.current) {
      //     setScroll(e.deltaY)
      //   }
      // }}
    >

      {/* Icons */}
      <nav style={{ position: 'fixed', width: '100%' }}>
        <IconRow />
      </nav>

      {/* Home */}
      <section ref={homeRef} id='Home' className="main-child">
        <Home />
      </section>
      
      {/* About */}
      <section ref={aboutRef} id='About' className="main-child">
        <About />
      </section>

      {/* Projects */}
      <section ref={projRef} id='Home' className="main-child">
        <Projects />
      </section>
    </main>
  )
}
