'use client'
import { useTextRotator } from '@/hooks/useTextRotator'
import './text-rotator.css'
import React from 'react'

type TextRotatorProps = {
  words: string[],
}

const TextRotator = ({ words }: TextRotatorProps) => {
  const [word] = useTextRotator({ 
    words: words, 
    delay: 3e3 
  })
  return (
    <div>
      <span 
        key={word} 
        className='text-carousel-word'
      >
        {word}
      </span>
    </div>
  )
}

export default TextRotator