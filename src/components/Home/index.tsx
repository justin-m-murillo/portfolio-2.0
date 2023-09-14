import './home.css'
import React from 'react'

import FacePortrait from '../_subcomponents/FacePortrait'
import TextRotator from '../_subcomponents/TextRotator'
import Typewriter from '../_subcomponents/Typewriter'
import SectionRow from '../_subcomponents/SectionRow'

import facepic from '../../../public/portraitimg.jpg'
import { getColorPalette, getSkillWords, getTypeWriterWords } from '@/static_data'
import { getSections } from '@/static_data'


const Home = () => {
  const sectionRow = getSections().filter(section => section.id != 'home')
  return (
    <div className='page bg-slate1'>
      <div className='home-container'>
        <div className='home-element'>
          <FacePortrait src={facepic} rounded />
        </div>
        <div className='home-element'>
          <TextRotator words={getSkillWords()} />
        </div>
        <div className='home-element'>
          <Typewriter words={getTypeWriterWords()} />
        </div>
        <div className='home-element'>
          <SectionRow sections={sectionRow} />
        </div>
      </div>
    </div>
  )
}

export default Home