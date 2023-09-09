import './home.css'
import React from 'react'
import Page from '../_subcomponents/Page'
import FacePortrait from '../_subcomponents/FacePortrait'
import TextFadeCarousel from '../_subcomponents/TextFadeCarousel'
import Typewriter from '../_subcomponents/Typewriter'

const Home = () => {
  const carouselWords = [
    'React',
    'React Native',
    'Typescript',
    'Tailwind CSS',
    'Amazon Web Services',
    'Google Maps API',
    'Prisma',
    'Unity',
    'Unreal Engine 5',
  ]

  const typeWriterWords = [
    'Hi!',
    'My name is Justin',
    'Nice to meet you!',
  ]

  return (
    <Page>
      <div className='home-container'>
        <div className='home-content'>
          <div className='home-element'>
            <FacePortrait />
          </div>
          <div className='home-element'>
            <TextFadeCarousel words={carouselWords} />
          </div>
          <div className='home-element'>
            <Typewriter words={typeWriterWords} />
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Home