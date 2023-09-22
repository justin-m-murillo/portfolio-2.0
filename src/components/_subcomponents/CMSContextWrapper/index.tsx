import { TAbout, THome, TPageInfo, TProject, TSkill, TSkillCategory, } from '@/typings'
import { SkillsContext, SkillCategoriesContext, AboutContext, HomeContext, ProjectsContext, PageInfoContext } from '@/context/CMSContext'
import React, { ReactNode, useState } from 'react'

type ContextWrapperProps = {
  pageInfo: TPageInfo[]
  home: THome[]
  about: TAbout[]
  skills: TSkill[]
  skillCategories: TSkillCategory[]
  projects: TProject[]
  children: ReactNode
}

const CMSContextWrapper = (props: ContextWrapperProps) => {
  const [pageInfo, setPageInfo] = useState<TPageInfo[]>(props.pageInfo)
  const [home, setHome] = useState<THome[]>(props.home)
  const [about, setAbout] = useState<TAbout[]>(props.about)
  const [skills, setSkills] = useState<TSkill[]>(props.skills)
  const [skillCategories, setSkillCategories] = useState<TSkillCategory[]>(props.skillCategories)
  const [projects, setProjects] = useState<TProject[]>(props.projects)

  return (
    <PageInfoContext.Provider value={{ pageInfo, setPageInfo }}>
      <HomeContext.Provider value={{ home, setHome }}>
        <AboutContext.Provider value={{ about, setAbout }}>
          <SkillCategoriesContext.Provider value={{ skillCategories, setSkillCategories }}>
            <SkillsContext.Provider value={{ skills, setSkills }}>
              <ProjectsContext.Provider value={{ projects, setProjects }}>
                { props.children }
              </ProjectsContext.Provider>
            </SkillsContext.Provider>
          </SkillCategoriesContext.Provider>
        </AboutContext.Provider>
      </HomeContext.Provider>
    </PageInfoContext.Provider>
  )
}

export default CMSContextWrapper