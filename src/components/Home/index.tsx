import './home.css'
import React from 'react'
import Page from '../_subcomponents/Page'
import FacePortrait from '../_subcomponents/FacePortrait'
import TextRotator from '../_subcomponents/TextRotator'
import Typewriter from '../_subcomponents/Typewriter'

import facepic from '../../../public/portraitimg.jpg'
import { getSkillWords, getTypeWriterWords } from '@/static_data'
import { getSections } from '@/static_data'
import SectionRow from '../_subcomponents/SectionRow'

const Home = () => {
  const sectionRow = getSections().filter(section => section.id != 'home')
  return (
    <Page>
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
    </Page>
  )
}

export default Home