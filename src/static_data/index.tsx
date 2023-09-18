import { useRef } from 'react'
import Home from '@/components/Home'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'

import js from '../../public/js.png'
import rt from '../../public/react.png'

export const getColorPalette = () => {
  return {
    slate1: "#E2E8F0",
    slate2: "#64748B",
    slate3: "#1E293B",
    slate4: "#0F172A",
    red:    "#963D5A",
    orange: "#E07A5F", 
  }
}

export const getTypeWriterWords = () => {
  return [
    'Hi!',
    "I'm Justin",
    'Nice to meet you!',
  ]
}

export const getSkillWords = () => {
  return [
    'React',
    'React Native',
    'Next.js',
    'Tailwind CSS',
    'Framer Motion',
    'Amazon Web Services',
    'Google Maps API',
    'Prisma',
    'Unity',
    'Unreal Engine 5',
  ]
}

export const getSections = () => {
  return [
    { index: 0, label: 'Home',     id: 'home',     component: <Home/>,     ref: useRef<HTMLElement>(null) },
    { index: 1, label: 'About Me', id: 'about',    component: <About/>,    ref: useRef<HTMLElement>(null) },
    { index: 2, label: 'Skills',   id: 'skills',   component: <Skills/>,   ref: useRef<HTMLElement>(null) },
    { index: 3, label: 'Projects', id: 'projects', component: <Projects/>, ref: useRef<HTMLElement>(null) },
  ]
}

export const getSkills = () => {
  return [
    
  ]
}