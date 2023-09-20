import './skills.css'
import React, { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/utils/configSanity'

import skillpic from '../../../public/js.png'
import { useSkillCategoriesContext, useSkillsContext } from '@/context/CMSContext'

type ImageProps = {
  source: string
  alt: string
}

const SkillIcon = ({ source, alt }: ImageProps) => {
  return (
    <div>
      <Image
        src={source}
        alt={alt}
        width={0}
        height={0}
        sizes='100vw'
        style={{ marginBottom: '2px', width: '100%', height: 'auto' }}
      />
    </div>
  )
}

const Skills = () => {
  const { skills } = useSkillsContext()
  const { skillCategories } = useSkillCategoriesContext()

  const categories = skillCategories.map(cat => ({
    id: cat._id,
    name: cat.name,
    skills: skills
      .filter(skill => skill.category._ref === cat._id)
      .sort((a, b) => a.priority - b.priority)
  }))

  return (
    <>
      <div className='module-container col'>
        <div className='module-element align-center justify-center'>
          <div className='text-banner align-center justify-center text-align-center'>
            <h1>The Right Tools for the Job</h1>
          </div>
          <div className='subtext-banner text-align-center'>
            <p>I can develop high-quality web and mobile applications using frontend and backend technologies. I'm committed to continuous learning to stay current with evolving tech trends.</p>
          </div>
        </div>
      </div>
      <div className='module-container col'>
      {categories.map(category => (
        <div key={category.id} className='module-element align-center'>
          <h2>{category.name}</h2>
          <div className='skills-container'>
            {category.skills.map(skill => (
              <div key={skill._id} className='skills-item'>
                <div className='skills-icon-wrapper'>
                  <SkillIcon source={urlFor(skill.image).url()} alt={skill.image.alt} />
                </div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>
    </>
  )
}

export default Skills