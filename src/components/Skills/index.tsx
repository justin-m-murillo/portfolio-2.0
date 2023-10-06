import './skills.css'
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/utils/configSanity'

import { useCoreContext, } from '@/context/CMSContext'

type ImageProps = {
  source: string
  alt: string
  url: string
}

const SkillIcon = ({ source, alt, url }: ImageProps) => {
  return (
    <div>
      <a target='_blank' href={url}>
        <Image
          src={source}
          alt={alt}
          width={0}
          height={0}
          sizes='100vw'
          style={{ marginBottom: '2px', width: '100%', height: 'auto' }}
        />
      </a>
    </div>
  )
}

const Skills = () => {
  const { skillSets, pageInfo } = useCoreContext();
  const { title, subtitle } = pageInfo.filter(info => info.sectionId === 'skills')[0];

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
        {skillSets.map(skillSet => (
          <div key={skillSet._id} className='module-element col align-center'>
            <h2>{skillSet.name}</h2>
            <div className='skills-container'>
              {skillSet.skills.map(skill => (
                <div key={skill._key} className='skills-item'>
                  <div className='skills-icon-wrapper'>
                    <SkillIcon source={urlFor(skill.image).url()} alt={skill.image.alt} url={skill.refUrl} />
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