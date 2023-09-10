import { useState, useEffect, useRef, RefObject, MutableRefObject } from 'react'

export type UseScrollSnapProps = {
  sections: RefObject<HTMLElement>[]
  delay?: number
}

export const useScrollSnap = ({ sections, delay=3e2 }: UseScrollSnapProps): 
  [ React.Dispatch<React.SetStateAction<number>>, 
    MutableRefObject<boolean>,
    MutableRefObject<number>, ] => 
{
  const [scroll, setScroll] = useState(0)
  const indexRef = useRef(0)
  const canScroll = useRef(true)

  const handleWheel = () => {
    if (scroll < 0 && indexRef.current - 1 >= 0) {
      indexRef.current--
    }
    if (scroll > 0 && indexRef.current + 1 < sections.length) {
      indexRef.current++
    }
  }

  useEffect(() => {
    canScroll.current = false
    handleWheel()
    sections[indexRef.current]?.current?.scrollIntoView({ behavior: 'smooth' })
    setScroll(0)
    const timer = setTimeout(() => {
      canScroll.current = true
    }, delay)
    return () => clearTimeout(timer)
  }, [scroll])

  return [setScroll, canScroll, indexRef]
}