import { useScrollSnap, UseScrollSnapProps } from '@/hooks/useScrollSnap'
import { SectionProps } from '@/props/section_props'
import './section-row.css'
import Link from 'next/link'
import React from 'react'

type SectionRowProps = {
  sections: SectionProps[]
}

const SectionRow = ({ sections }: SectionRowProps) => {
  const [indexRef] = useScrollSnap({ sections: sections.map(sec => sec.ref) })
  return (
    <nav className='section-row-nav'>
      {sections.map((section, index) => 
        <div key={index} className='section-btn-wrapper'>
          <div className='section-btn'>{section.label}</div>
        </div>
      )}
    </nav>
  )
}

export default SectionRow