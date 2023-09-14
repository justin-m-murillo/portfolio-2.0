import { RefObject } from "react"

export type SectionProps = {
  index: number
  label: string
  id: string
  component: JSX.Element
  ref: RefObject<HTMLElement>
}