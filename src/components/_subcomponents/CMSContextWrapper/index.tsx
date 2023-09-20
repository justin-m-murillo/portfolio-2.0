import { TAbout, THome, TSkill, TSkillCategory } from '@/typings'
import { SkillsContext, SkillCategoriesContext, AboutContext, HomeContext } from '@/context/CMSContext'
import React, { ReactNode, useState } from 'react'

type ContextWrapperProps = {
  home: THome[]
  about: TAbout[]
  skills: TSkill[]
  skillCategories: TSkillCategory[]
  children: ReactNode
}

const CMSContextWrapper = (props: ContextWrapperProps) => {
  const [home, setHome] = useState<THome[]>(props.home)
  const [about, setAbout] = useState<TAbout[]>(props.about)
  const [skills, setSkills] = useState<TSkill[]>(props.skills)
  const [skillCategories, setSkillCategories] = useState<TSkillCategory[]>(props.skillCategories)
  
  return (
    <HomeContext.Provider value={{ home, setHome }}>
      <AboutContext.Provider value={{ about, setAbout }}>
        <SkillCategoriesContext.Provider value={{ skillCategories, setSkillCategories }}>
          <SkillsContext.Provider value={{ skills, setSkills }}>
            { props.children }
          </SkillsContext.Provider>
        </SkillCategoriesContext.Provider>
      </AboutContext.Provider>
    </HomeContext.Provider>
  )
}

export default CMSContextWrapper