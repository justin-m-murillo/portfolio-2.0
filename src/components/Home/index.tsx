import React from 'react'

import FacePortrait from '../_subcomponents/FacePortrait'
import Typewriter from '../_subcomponents/Typewriter'
import SectionRow from '../_subcomponents/SectionRow'

import { getSections } from '@/static_data'

import './home.css'
import { useHomeContext } from '@/context/CMSContext'
import { urlFor } from '@/utils/configSanity'
import { TSection } from '@/typings'
import { useSectionsContext } from '@/context/SectionsContext'

const Home = () => {
  const { home } = useHomeContext()
  const { sections } = useSectionsContext()
  const projectSection = sections.filter(sec => sec.id === 'projects')[0]

  console.log(projectSection)
  return (
    <div className='module-container col full align-center justify-center'>
      <div className='main-container row'>
        <div className='main-element face'>
          <div className='face-portrait-wrapper'>
            <FacePortrait src={urlFor(home[0].image).url()} />
          </div>
        </div>
        <div className='main-element intro'>
          <div className='intro-message'>
            <div className='text-banner'>
              <h1>Navigating the Digital Frontier</h1>
            </div>
            <div className='subtext-banner'>
              <p>{home[0].intro}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='module-container row align-center justify-center'>
        <div className='button-row'>
          <button className='projects' onClick={() => {
            projectSection?.ref?.current.scrollIntoView({ behavior: 'smooth' })
          }}>
            <span>Projects</span>
          </button>
          <button className='links'>
            <span>View Resume</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home