'use client'
import { createContext, useContext } from 'react'

export type NavIndexContextProps = {
  navIndex: number
  setNavIndex: React.Dispatch<React.SetStateAction<number>>
}

export const NavIndexContext = createContext<NavIndexContextProps>({
  navIndex: 0,
  setNavIndex: () => {},
})

export const useNavIndexContext = () => useContext(NavIndexContext)