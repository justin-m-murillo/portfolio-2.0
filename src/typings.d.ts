type TSanityBody = {
  _id: string
  _updatedAt: string
  _createdAt: string
  _rev: string
  _type: string
  name: string
}

type TImage = {
  _type: 'image'
  alt: string
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export type TSkillCategory = TSanityBody & {}

export type TSkill = TSanityBody & {
  image: TImage
  priority: number
  category: TSkillCategory
}