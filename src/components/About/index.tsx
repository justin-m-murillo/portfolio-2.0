import React from 'react'
import Image from 'next/image'

import aboutpic from '../../../public/milo-and-i.jpg'
import './about.css'
import { useAboutContext } from '@/context/CMSContext'

import { FaUsers, FaCubes, FaChartLine } from 'react-icons/fa'

const About = () => {
  const { about } = useAboutContext()
  const iconSize = 32
  const icons = [
    <FaUsers size={iconSize} />,
    <FaCubes size={iconSize} />,
    <FaChartLine size={iconSize} />,
  ]

  return (
      <>
        <div className='module-container col'>
          <div className='module-element align-center justify-center'>
            <div className='text-banner align-center justify-center text-align-center'>
              {about[0].slogan.map((elem, index) => (
                <h1 key={index}>{elem}</h1>
              ))}
            </div>
            <div className='subtext-banner align-center justify-center text-align-center'>
              {about[0].mission.map((elem, index) => (
                <p key={index}>{elem}</p>
              ))}
            </div>
          </div>
        </div>
        <div className='module-container row'>
          <div className='module-element align-center'>
            <div className='objective-wrapper'>
              {about[0].objectives?.map((objective, index) => (
                <div key={objective._key} className='objective'>
                  <div className='objective-heading'>
                    <span>{icons[index]}</span>
                    <h2>{objective.title}</h2>
                  </div>
                  
                  <p>{objective.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
  )
}

export default About