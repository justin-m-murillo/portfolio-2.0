'use client'
import { useState, useEffect } from 'react'
 
const getWindowDimensions = () => {
  const { innerWidth:width, innerHeight:height } =  window
  return { width, height }
}

export const useWindowDimensions = ():{
  width: number;
  height: number;
} => {
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return windowDimensions
}