import React from 'react'
import './about.css'
import { useAboutContext, usePageInfoContext } from '@/context/CMSContext'

import { FaUsers, FaCubes, FaChartLine } from 'react-icons/fa'

const About = () => {
  const { about } = useAboutContext()
  const { pageInfo } = usePageInfoContext()
  const { title, subtitle } = pageInfo.filter(info => info.sectionId === 'about')[0]

  const iconSize = 32
  const icons = [
    <FaUsers size={iconSize} />,
    <FaCubes size={iconSize} />,
    <FaChartLine size={iconSize} />,
  ]

  return (
      <>
        <div className='module-container align-center justify-center col'>
          <div className='module-element col align-center justify-center'>
            <div className='text-banner align-center justify-center text-align-center'>
              {title?.map((elem, index) => (
                <h1 key={index}>{elem}</h1>
              ))}
            </div>
            <div className='subtext-banner align-center justify-center text-align-center'>
              {subtitle?.map((elem, index) => (
                <p key={index}>{elem}</p>
              ))}
            </div>
          </div>
        </div>
        <div className='module-container row'>
          <div className='module-element col align-center'>
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