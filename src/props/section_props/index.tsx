import { RefObject } from "react"

export type SectionProps = {
  label: string
  id: string
  component: JSX.Element
  ref: RefObject<HTMLElement>
}