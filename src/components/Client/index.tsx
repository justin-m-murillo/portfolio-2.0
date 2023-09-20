'use client'
import React, { useState } from 'react'
import { getSections } from '@/static_data'
import { TAbout, THome, TSection, TSkill, TSkillCategory } from '@/typings'
import CMSContextWrapper from '../_subcomponents/CMSContextWrapper'
import NavBar from '../_subcomponents/NavBar'
import NavBarSide from '@/components/_subcomponents/NavBarSide'
import SectionDivider from '../_subcomponents/SectionDivider'
import { SectionsContext } from '@/context/SectionsContext'

type ClientProps = {
  home: THome[]
  about: TAbout[]
  skills: TSkill[]
  skillCategories: TSkillCategory[]
}

const Client = ({ home, about, skills, skillCategories }: ClientProps) => {
  //const sections = getSections() as TSection[]
  const [sections, setSections] = useState<TSection[]>(getSections() as TSection[])

  return (
    <CMSContextWrapper
      home={home}
      about={about}
      skillCategories={skillCategories} 
      skills={skills}
    >
      
      <SectionsContext.Provider value={{ sections, setSections }}>
        <main>
            {/* NavBar */}
            <NavBar />

            {/* Sections */}
            <div className='main-content'>
              {sections.map(sec => (
                <section key={sec.id} id={sec.id} ref={sec.ref}>
                  {sec.component}
                  {sec.id !== 'home' && <SectionDivider />}
                </section>
              ))}
            </div>
          </main>
      </SectionsContext.Provider>
    </CMSContextWrapper>
  )
}

export default Client