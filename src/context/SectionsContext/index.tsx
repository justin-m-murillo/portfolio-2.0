'use client'
import { TSection } from '@/typings'
import { createContext, useContext } from 'react'

export type SectionsContextProps = {
  sections: TSection[]
  setSections: React.Dispatch<React.SetStateAction<TSection[]>>
}

export const SectionsContext = createContext<SectionsContextProps>({
  sections: [],
  setSections: () => {},
})

export const useSectionsContext = () => useContext(SectionsContext)