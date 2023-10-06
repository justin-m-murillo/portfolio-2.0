'use client'
import React, { useRef } from 'react'
import { TAbout, TContactInfoList, THome, TPageInfo, TProjectList, TSection, TSkillSet } from '@/typings'
import CMSContextWrapper from '../_subcomponents/CMSContextWrapper'
import NavBar from '../_subcomponents/NavBar'
import SectionDivider from '../_subcomponents/SectionDivider'
import { SectionsContext } from '@/context/SectionsContext'
import Footer from '../Footer'
import About from '../About'
import ContactMe from '../ContactMe'
import Home from '../Home'
import Projects from '../Projects'
import Skills from '../Skills'

type ClientProps = {
  pageInfo: TPageInfo[]
  home: THome[]
  about: TAbout[]
  skillSets: TSkillSet[]
  projectLists: TProjectList[]
  contactInfoLists: TContactInfoList[]
}

const Client = ({ pageInfo, home, about, skillSets, projectLists, contactInfoLists }: ClientProps) => {
  const sections: TSection[] = [
    { index: 0, label: 'Home',       id: 'home',      component: <Home/>,       ref: useRef<HTMLElement>(null) },
    { index: 1, label: 'Mission',    id: 'mission',   component: <About/>,      ref: useRef<HTMLElement>(null) },
    { index: 2, label: 'Skills',     id: 'skills',    component: <Skills/>,     ref: useRef<HTMLElement>(null) },
    { index: 3, label: 'Projects',   id: 'projects',  component: <Projects/>,   ref: useRef<HTMLElement>(null) },
    { index: 4, label: 'Contact Me', id: 'contactme', component: <ContactMe />, ref: useRef<HTMLElement>(null)}
  ];

  return (
    <CMSContextWrapper
      pageInfo={pageInfo}
      home={home}
      about={about}
      skillSets={skillSets}
      projectLists={projectLists}
      contactInfoLists={contactInfoLists}
    >
      
      <SectionsContext.Provider value={{ sections }}>
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