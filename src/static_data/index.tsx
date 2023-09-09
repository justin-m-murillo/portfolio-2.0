import { useRef } from 'react'
import Home from '@/components/Home'
import About from '@/components/About'
import Projects from '@/components/Projects'

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
    'Typescript',
    'Tailwind CSS',
    'Amazon Web Services',
    'Google Maps API',
    'Prisma',
    'Unity',
    'Unreal Engine 5',
  ]
}

export const getSections = () => {
  return [
    { label: 'Home',     id: 'home',     component: <Home/>,     ref: useRef<HTMLElement>(null) },
    { label: 'About',    id: 'about',    component: <About/>,    ref: useRef<HTMLElement>(null) },
    { label: 'Projects', id: 'projects', component: <Projects/>, ref: useRef<HTMLElement>(null) },
  ]
}