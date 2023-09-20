'use client'
import { createContext, useContext } from 'react'

import { TAbout, THome, TSkill, TSkillCategory, TVideo } from '@/typings'

/** HOME CONTEXT */

export type HomeContextProps = {
  home: THome[]
  setHome: React.Dispatch<React.SetStateAction<THome[]>>
}

export const HomeContext = createContext<HomeContextProps>({
  home: [],
  setHome: () => {},
})

/** ABOUT CONTEXT */

export type AboutContextProps = {
  about: TAbout[]
  setAbout: React.Dispatch<React.SetStateAction<TAbout[]>>
}

export const AboutContext = createContext<AboutContextProps>({
  about: [],
  setAbout: () => {},
})

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

/** VIDEO */

export type VideoContextProps = {
  video: TVideo[]
  setVideo: React.Dispatch<React.SetStateAction<TVideo[]>>
}

export const VideoContext = createContext<VideoContextProps>({
  video: [],
  setVideo: () => {},
})

/** EXPORT HOOKS */

export const useHomeContext = () => useContext(HomeContext)
export const useAboutContext = () => useContext(AboutContext)
export const useSkillsContext = () => useContext(SkillsContext)
export const useSkillCategoriesContext = () => useContext(SkillCategoriesContext)
export const useVideoContext = () => useContext(VideoContext)