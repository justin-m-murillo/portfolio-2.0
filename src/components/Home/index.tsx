import React from 'react'
import FacePortrait from '../_subcomponents/FacePortrait'
import './home.css'
import { useCoreContext } from '@/context/CMSContext'
import { urlFor } from '@/utils/configSanity'
import { useSectionsContext } from '@/context/SectionsContext'
import { Button, ButtonRow } from '../_subcomponents/Button'

const Home = () => {
  const { home } = useCoreContext();
  const { sections } = useSectionsContext();
  const projectSection = sections.filter(sec => sec.id === 'projects')[0];

  const handleScrollToProjects = () => {
    projectSection?.ref?.current?.scrollIntoView({ block: 'start', behavior: 'smooth' })
  };

  return (
    <div className='module-container col align-center justify-center'>
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
            <div className='subtext-banner align-start justify-start'>
              <p>{home[0].intro}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='module-container row align-center justify-center'>
        <ButtonRow className='align-center justify-center'>
          <Button 
            title='Projects' 
            onClick={handleScrollToProjects}
            border 
          />
          <Button 
            title={'View Resume'}
            onClick={() => {}}  
          />
        </ButtonRow>
      </div>
    </div>
  )
}

export default Home