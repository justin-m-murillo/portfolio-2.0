import { useState, useEffect, useRef, RefObject, MutableRefObject } from 'react'

export type UseScrollSnapProps = {
  sections: RefObject<HTMLElement>[]
  initialIndex?: number
  delay?: number
}

export const useScrollSnap = ({ sections, initialIndex=0, delay=3e2 }: UseScrollSnapProps) => 
{
  const [scroll, setScroll] = useState(0)
  const [index, setIndex] = useState(initialIndex)
  const canScroll = useRef(true)

  const handleWheel = () => {
    if (scroll < 0 && index - 1 >= 0) {
      setIndex(index-1)
    }
    if (scroll > 0 && index + 1 < sections.length) {
      setIndex(index+1)
    }
  }

  useEffect(() => {
    canScroll.current = false
    handleWheel()
    sections[index]?.current?.scrollIntoView({ behavior: 'smooth' })
    setScroll(0)
    const timer = setTimeout(() => {
      canScroll.current = true
    }, delay)
    return () => clearTimeout(timer)
  }, [scroll, index])

  return { setScroll, index, setIndex, canScroll }
}