import { TAbout, THome, TSkill, TSkillCategory, TVideo } from '@/typings'
import { SkillsContext, SkillCategoriesContext, AboutContext, HomeContext, VideoContext } from '@/context/CMSContext'
import React, { ReactNode, useState } from 'react'

type ContextWrapperProps = {
  home: THome[]
  about: TAbout[]
  skills: TSkill[]
  skillCategories: TSkillCategory[]
  video: TVideo[]
  children: ReactNode
}

const CMSContextWrapper = (props: ContextWrapperProps) => {
  const [home, setHome] = useState<THome[]>(props.home)
  const [about, setAbout] = useState<TAbout[]>(props.about)
  const [skills, setSkills] = useState<TSkill[]>(props.skills)
  const [skillCategories, setSkillCategories] = useState<TSkillCategory[]>(props.skillCategories)
  const [video, setVideo] = useState<TVideo[]>(props.video)

  return (
    <HomeContext.Provider value={{ home, setHome }}>
      <AboutContext.Provider value={{ about, setAbout }}>
        <SkillCategoriesContext.Provider value={{ skillCategories, setSkillCategories }}>
          <SkillsContext.Provider value={{ skills, setSkills }}>
            <VideoContext.Provider value={{ video, setVideo }}>
              { props.children }
            </VideoContext.Provider>
          </SkillsContext.Provider>
        </SkillCategoriesContext.Provider>
      </AboutContext.Provider>
    </HomeContext.Provider>
  )
}

export default CMSContextWrapper