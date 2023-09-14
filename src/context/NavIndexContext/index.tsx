'use client'
import { createContext, useContext } from 'react'

export type NavIndexProps = {
  navIndex: number
  setNavIndex: React.Dispatch<React.SetStateAction<number>>
}

export const NavIndexContext = createContext<NavIndexProps>({
  navIndex: 0,
  setNavIndex: () => {},
})

export const useNavIndexContext = () => useContext(NavIndexContext)