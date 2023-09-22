import './skills.css'
import React, { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/utils/configSanity'

import skillpic from '../../../public/js.png'
import { usePageInfoContext, useSkillCategoriesContext, useSkillsContext } from '@/context/CMSContext'

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
  const { pageInfo } = usePageInfoContext()
  const { title, subtitle } = pageInfo.filter(info => info.sectionId === 'skills')[0]

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
        <div className='module-element col align-center justify-center'>
          <div className='text-banner align-center justify-center text-align-center'>
            {title.map((elem, index) => (
              <h1 key={index}>{elem}</h1>
            ))}
          </div>
          <div className='subtext-banner text-align-center'>
            {subtitle.map((elem, index) => (
              <p key={index}>{elem}</p>
            ))}          
          </div>
        </div>
      </div>
      <div className='module-container col'>
      {categories.map(category => (
        <div key={category.id} className='module-element col align-center'>
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