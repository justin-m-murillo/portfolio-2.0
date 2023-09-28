'use client'
import React, { useState } from 'react'
import { getSections } from '@/static_data'
import { TAbout, THome, TPageInfo, TProject, TSection, TSkill, TSkillCategory } from '@/typings'
import CMSContextWrapper from '../_subcomponents/CMSContextWrapper'
import NavBar from '../_subcomponents/NavBar'
import NavBarSide from '@/components/_subcomponents/NavBarSide'
import SectionDivider from '../_subcomponents/SectionDivider'
import { SectionsContext } from '@/context/SectionsContext'

type ClientProps = {
  pageInfo: TPageInfo[]
  home: THome[]
  about: TAbout[]
  skills: TSkill[]
  skillCategories: TSkillCategory[]
  projects: TProject[]
}

const Client = ({ pageInfo, home, about, skills, skillCategories, projects }: ClientProps) => {
  const [sections, setSections] = useState<TSection[]>(getSections() as TSection[])

  return (
    <CMSContextWrapper
      pageInfo={pageInfo}
      home={home}
      about={about}
      skillCategories={skillCategories} 
      skills={skills}
      projects={projects}
    >
      
      <SectionsContext.Provider value={{ sections, setSections }}>
        <main>
          {/* NavBar */}
          <NavBar />

          {/* Sections */}
          <div className='main-content'>
            {sections.map(sec => (
              <section key={sec.id} id={sec.id} ref={sec.ref}>
                <SectionDivider />
                {sec.component}
              </section>
            ))}
          </div>
        </main>
      </SectionsContext.Provider>
    </CMSContextWrapper>
  )
}

export default Client