'use client'
import React, { useState } from 'react'
import { getSections } from '@/static_data'
import { TAbout, TContactInfoList, THome, TPageInfo, TProjectList, TSection, TSkillSet } from '@/typings'
import CMSContextWrapper from '../_subcomponents/CMSContextWrapper'
import NavBar from '../_subcomponents/NavBar'
import SectionDivider from '../_subcomponents/SectionDivider'
import { SectionsContext } from '@/context/SectionsContext'
import Footer from '../Footer'

type ClientProps = {
  pageInfo: TPageInfo[]
  home: THome[]
  about: TAbout[]
  skillSets: TSkillSet[]
  projectLists: TProjectList[]
  contactInfoLists: TContactInfoList[]
}

const Client = ({ pageInfo, home, about, skillSets, projectLists, contactInfoLists }: ClientProps) => {
  const [sections, setSections] = useState<TSection[]>(getSections() as TSection[])

  return (
    <CMSContextWrapper
      pageInfo={pageInfo}
      home={home}
      about={about}
      skillSets={skillSets}
      projectLists={projectLists}
      contactInfoLists={contactInfoLists}
    >
      
      <SectionsContext.Provider value={{ sections, setSections }}>
        <header>
          {/* NavBar */}
          <NavBar />
        </header>
          <main>
            {/* Sections */}
            <div className='main-content'>
              {sections.map(sec => (
                <section key={sec.id} id={sec.id} ref={sec.ref}>
                  <SectionDivider />
                  {sec.component}
                </section>
              ))}
              <SectionDivider />
            </div>
          </main>
        <footer>
          <Footer />
        </footer>
      </SectionsContext.Provider>
    </CMSContextWrapper>
  )
}

export default Client