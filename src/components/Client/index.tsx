'use client'
import React, { ReactNode } from 'react'
import { sanityClient } from '@/utils/configSanity'
import { NavIndexContext } from '@/context/NavIndexContext'
import { useKeyDownListener } from '@/hooks/useScrollArrows'
import { useScrollSnap } from '@/hooks/useScrollSnap'
import { getSections } from '@/static_data'
import IconRow from '../_subcomponents/IconRow'
import { TSkill, TSkillCategory } from '@/typings'
import CMSContextWrapper from '../_subcomponents/CMSContextWrapper'

type ClientProps = {
  skills: TSkill[]
  skillCategories: TSkillCategory[]
}

const Client = ({ skills, skillCategories }: ClientProps) => {
  const sections = getSections()
  const {setScroll, index, setIndex, canScroll} = useScrollSnap({
    sections: sections.map(section => section.ref),
  })

  const handleArrowKey = (e: globalThis.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown': setScroll(1); break;
      case 'ArrowUp': setScroll(-1); break;
    }
  }
  useKeyDownListener({ handleInput: handleArrowKey })

  return (
    <CMSContextWrapper 
      skillCategoires={skillCategories} 
      skills={skills}
    >
      <NavIndexContext.Provider value={{ 
        navIndex: index, 
        setNavIndex: setIndex 
      }}>
        <main
          className="main"
          onWheel={e => {
            if (canScroll.current) {
              setScroll(e.deltaY)
              e.deltaY = 0
          }}}
        >
          {/* Icons */}
          <nav>
            <IconRow />
          </nav>

          {/* Sections */}
          {sections.map(sec => (
            <section key={sec.id} id={sec.id} ref={sec.ref}>
              {sec.component}
            </section>
          ))}
        </main>
      </NavIndexContext.Provider>
    </CMSContextWrapper>
  )
}

export default Client