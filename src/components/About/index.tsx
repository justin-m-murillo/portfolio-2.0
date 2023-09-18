import React from 'react'
import Image from 'next/image'

import aboutpic from '../../../public/milo-and-i.jpg'
import './about.css'
import { useWindowDimensions } from '@/hooks/useWindowDimensions'

const About = () => {
  const { width } = useWindowDimensions()
  //console.log(width) 
  return (
    <div className='page'>
      <div className='about-container'>
        <div className='about-item-container'>
          <Image 
            src={aboutpic}
            alt='A picture of Milo and Justin'
            width={360}
          />
        </div>
        <div className='about-item-container'>
          <div className='about-desc-container'>
            <h1>A little about <span>me</span> ...</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tincidunt vitae semper quis lectus. Pretium viverra suspendisse potenti nullam. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Magna etiam tempor orci eu lobortis elementum nibh. Aliquet nibh praesent tristique magna sit amet purus. Eget est lorem ipsum dolor.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About