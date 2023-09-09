'use client'
import { useState, useEffect } from 'react'

type UseTextRotatorProps = {
    words: string[]
    delay?: number
}

export const useTextRotator = ({ words, delay=1e3 }: UseTextRotatorProps) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setIndex((index+1) % words.length), delay)
    return () => clearTimeout(timer)
  }, [index])

  return [words[index], index]
}