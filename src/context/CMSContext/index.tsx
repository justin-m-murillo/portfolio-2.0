'use client'
import { createContext, useContext } from 'react'

import { TSkill, TSkillCategory } from '@/typings'

/** SKILLS CONTEXT */

export type SkillsContextProps = {
  skills: TSkill[]
  setSkills: React.Dispatch<React.SetStateAction<TSkill[]>>
}

export const SkillsContext = createContext<SkillsContextProps>({
  skills: [],
  setSkills: () => {},
})

/** SKILL CATEGORIES */

export type SkillCategoriesContextProps = {
  skillCategories: TSkillCategory[]
  setSkillCategories: React.Dispatch<React.SetStateAction<TSkillCategory[]>>
}

export const SkillCategoriesContext = createContext<SkillCategoriesContextProps>({
  skillCategories: [],
  setSkillCategories: () => {},
})


export const useSkillsContext = () => useContext(SkillsContext)
export const useSkillCategoriesContext = () => useContext(SkillCategoriesContext)