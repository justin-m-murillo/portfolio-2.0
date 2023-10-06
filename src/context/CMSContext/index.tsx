'use client'
import { SetStateAction, createContext, useContext } from 'react'
import { TAbout, TContactInfoList, THome, TPageInfo, TProject, TProjectList, TSkillSet } from '@/typings'

/** PAGE INFO CONTEXT */
export type PageInfoContextProps = {
  pageInfo: TPageInfo[]
  setPageInfo: React.Dispatch<React.SetStateAction<TPageInfo[]>>
}

/** HOME CONTEXT */
export type HomeContextProps = {
  home: THome[]
  setHome: React.Dispatch<React.SetStateAction<THome[]>>
}

/** ABOUT CONTEXT */
export type AboutContextProps = {
  about: TAbout[]
  setAbout: React.Dispatch<React.SetStateAction<TAbout[]>>
}

/** SKILL SET */
export type SkillSetContextProps = {
  skillSets: TSkillSet[],
  setSkillSets: React.Dispatch<SetStateAction<TSkillSet[]>>
}

/** PROJECT */
export type ProjectsContextProps = {
  projects: TProject[]
  setProjects: React.Dispatch<React.SetStateAction<TProject[]>>
}

/** PROJECT LIST */
export type ProjectListContextProps = {
  projectLists: TProjectList[],
  setProjectLists: React.Dispatch<React.SetStateAction<TProjectList[]>>
}

export type TContactInfoListContextProps = {
  contactInfoLists: TContactInfoList[],
  setContactInfoLists: React.Dispatch<React.SetStateAction<TContactInfoList[]>>
}

/** CORE CONTEXT */
export type CoreContextProps = 
  PageInfoContextProps&
  HomeContextProps& 
  AboutContextProps&
  SkillSetContextProps&
  ProjectListContextProps&
  TContactInfoListContextProps

export const CoreContext = createContext<CoreContextProps>({
  pageInfo: [],
  setPageInfo: () => {},
  home: [],
  setHome: () => {},
  about: [],
  setAbout: () => {},
  skillSets: [],
  setSkillSets: () => {},
  projectLists: [],
  setProjectLists: () => {},
  contactInfoLists: [],
  setContactInfoLists: () => {},
})

/** EXPORT HOOKS */
export const useCoreContext = () => useContext(CoreContext);