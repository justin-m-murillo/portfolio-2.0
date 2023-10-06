type TSection = {
  index: number
  label: string
  id: string
  component: JSX.Element
  ref: RefObject<HTMLElement>
}

type TSanityBody = {
  _id: string
  _updatedAt: string
  _createdAt: string
  _rev: string
  _type: string
}

type TImage = {
  _type: 'image'
  alt: string
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export type TPageInfo = TSanityBody & {
  sectionId: string
  title: string[]
  subtitle: string[]
}

export type THome = TSanityBody & {
  intro: string
  image: TImage
  resumeUrl: string
}

export type TAbout = TSanityBody & {
  objectives: TObjective[]
}

export type TObjective = {
  _key: string
  title: string
  description: string
}

export type TSkillCategory = TSanityBody & {
  name: string
}

export type TSkill = TSanityBody & {
  name: string
  image: TImage
  refUrl: string
  _key: string
}

export type TSkillSet = TSanityBody & {
  name: string
  skills: TSkill[]
}

export type TProject = TSanityBody & {
  name: string
  description: string[]
  images: TImage[]
  demoUrl: string
  repoUrl: string
}

export type TProjectList = TSanityBody & {
  name: string
  projects: TProject[]
}

export type TContactInfo = TSanityBody & {
  name: string
  value: string
}

export type TContactInfoList = TSanityBody & {
  contacts: TContactInfo[]
}