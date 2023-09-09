import './home.css'
import React from 'react'
import Page from '../_subcomponents/Page'
import FacePortrait from '../_subcomponents/FacePortrait'
import TextRotator from '../_subcomponents/TextRotator'
import Typewriter from '../_subcomponents/Typewriter'

import facepic from '../../../public/portraitimg.jpg'
import { getSkillWords, getTypeWriterWords } from '@/static_data'

const Home = () => {
  return (
    <Page>
      <div className='home-container'>
        <div className='home-content'>
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
            
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Home