import { TSkill, TSkillCategory } from '@/typings'
import { SkillsContext, SkillCategoriesContext } from '@/context/CMSContext'
import React, { ReactNode, useState } from 'react'

type ContextWrapperProps = {
  skills: TSkill[]
  skillCategoires: TSkillCategory[]
  children: ReactNode
}

const CMSContextWrapper = (props: ContextWrapperProps) => {
  const [skills, setSkills] = useState<TSkill[]>(props.skills)
  const [skillCategories, setSkillCategories] = useState<TSkillCategory[]>(props.skills)
  
  return (
    <SkillCategoriesContext.Provider value={{ skillCategories, setSkillCategories }}>
      <SkillsContext.Provider value={{ skills, setSkills }}>
        { props.children }
      </SkillsContext.Provider>
    </SkillCategoriesContext.Provider>
  )
}

export default CMSContextWrapper