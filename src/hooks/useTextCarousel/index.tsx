'use client'
import { useState, useEffect } from 'react'

type TextCarouselProps = {
    words: string[]
    delay?: number
}

export const useTextCarousel = ({ words, delay=1e3 }: TextCarouselProps) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setIndex((index+1) % words.length), 3e3)
    return () => clearTimeout(timer)
  }, [index])

  return [ words[index], index ]
}