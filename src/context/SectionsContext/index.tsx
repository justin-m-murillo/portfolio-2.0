'use client'
import { TSection } from '@/typings'
import { createContext, useContext } from 'react'

export type SectionsContextProps = {
  sections: TSection[];
}

export const SectionsContext = createContext<SectionsContextProps>({
  sections: [],
})

export const useSectionsContext = () => useContext(SectionsContext)