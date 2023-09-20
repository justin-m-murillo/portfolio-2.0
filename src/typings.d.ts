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

export type THome = TSanityBody & {
  intro: string
  image: TImage
  typeText: string[]
}

export type TAbout = TSanityBody & {
  slogan: string[]
  mission: string[]
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
  priority: number
  category: {
    _ref: string
    _type: 'reference'
  }
}