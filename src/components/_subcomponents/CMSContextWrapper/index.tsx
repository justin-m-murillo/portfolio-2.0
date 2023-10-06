import { TAbout, TContactInfoList, THome, TPageInfo, TProjectList, TSkillSet, } from '@/typings'
import { CoreContext } from '@/context/CMSContext'
import React, { ReactNode, useState } from 'react'

type ContextWrapperProps = {
  pageInfo: TPageInfo[]
  home: THome[]
  about: TAbout[]
  skillSets: TSkillSet[]
  projectLists: TProjectList[]
  contactInfoLists: TContactInfoList[]
  children: ReactNode
}

const CMSContextWrapper = (props: ContextWrapperProps) => {
  const [pageInfo, setPageInfo] = useState<TPageInfo[]>(props.pageInfo)
  const [home, setHome] = useState<THome[]>(props.home)
  const [about, setAbout] = useState<TAbout[]>(props.about)
  const [skillSets, setSkillSets] = useState<TSkillSet[]>(props.skillSets);
  const [projectLists, setProjectLists] = useState<TProjectList[]>(props.projectLists)
  const [contactInfoLists, setContactInfoLists] = useState<TContactInfoList[]>(props.contactInfoLists)

  return (
    <CoreContext.Provider value={{
      pageInfo, setPageInfo,
      home, setHome,
      about, setAbout,
      skillSets, setSkillSets,
      projectLists, setProjectLists,
      contactInfoLists, setContactInfoLists
    }}>
      { props.children }
    </CoreContext.Provider>
  )
}

export default CMSContextWrapper