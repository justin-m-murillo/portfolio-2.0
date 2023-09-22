import { useRef } from 'react'
import Home from '@/components/Home'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import { TSection } from '@/typings'

export type SectionProps = {
  sectionId: string
}

export const getSections = (): TSection[] => {
  const sections: TSection[] = [
    { index: 0, label: 'Home',     id: 'home',     component: <Home/>,     ref: useRef<HTMLElement>(null) },
    { index: 1, label: 'Mission',  id: 'mission',  component: <About/>,    ref: useRef<HTMLElement>(null) },
    { index: 2, label: 'Skills',   id: 'skills',   component: <Skills/>,   ref: useRef<HTMLElement>(null) },
    { index: 3, label: 'Projects', id: 'projects', component: <Projects/>, ref: useRef<HTMLElement>(null) },
  ]
  return sections
}