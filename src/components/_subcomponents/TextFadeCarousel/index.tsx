'use client'
import { useTextCarousel } from '@/hooks/useTextCarousel'
import './text-fade-carousel.css'
import React from 'react'

type TextFadeCarouselProps = {
  words: string[],
}

const TextFadeCarousel = ({ words }: TextFadeCarouselProps) => {
  const [word] = useTextCarousel({ 
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

export default TextFadeCarousel