import './skills.css'
import React, { useState } from 'react'
import Image, { StaticImageData} from 'next/image'

import skillpic from '../../../public/js.png'

type ImageProps = {
  icon: StaticImageData
}

type QuerySkillCategory = {
  _id: string
  name: string
}

const SkillIcon = ({ icon }: ImageProps) => {
  return (
    <Image 
      src={icon}
      alt='icon of skill'
      width={48}
      style={{ marginBottom: '2px' }}
    />
  )
}

const Skills = () => {
  const fontSkills = [
    'React JS/Native',
    'Next.js',
    'Javascript',
    'Typescript',
    'Tailwind CSS',
    'Framer Motion',
  ]

  const backSkills = [
    'AWS',
    'Prisma',
    'Google Maps API'
  ]

  return (
    <div className='page'>
      <h1>Frontend</h1>
      <div className='skills-container'>
        {fontSkills.map((skill, index) => (
          <div key={index} className='skills-item'>
            <SkillIcon icon={skillpic} />
            <span>{skill}</span>
          </div>
        ))}
      </div>
      <h1>Backend / Other</h1>
      <div className='skills-container'>
        {backSkills.map((skill, index) => (
          <div key={index} className='skills-item'>
            <SkillIcon icon={skillpic} />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills