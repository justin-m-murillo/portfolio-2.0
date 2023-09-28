import { useScrollSnap, UseScrollSnapProps } from '@/hooks/useScrollSnap'
import { SectionProps } from '@/props/section_props'
import './section-row.css'
import React from 'react'
import { useNavIndexContext } from '@/context/NavIndexContext'

type SectionRowProps = {
  sections: SectionProps[]
}

const SectionRow = ({ sections }: SectionRowProps) => {
  const { setNavIndex } = useNavIndexContext()
  return (
    <div className='section-row-nav'>
      {sections.map(section => 
        <div key={section.index} className='section-btn-wrapper'>
          <div className='section-btn' onClick={() => {
            setNavIndex(section.index)
          }}>{section.label}</div>
        </div>
      )}
    </div>
  )
}

export default SectionRow