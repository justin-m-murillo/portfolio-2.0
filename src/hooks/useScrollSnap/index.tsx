import { useState, useEffect, useRef, RefObject, MutableRefObject } from 'react'


const useScrollSnap = (sections: RefObject<HTMLElement>[]): 
  [React.Dispatch<React.SetStateAction<number>>, MutableRefObject<boolean>] => 
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
    //console.log('useeffect')
    canScroll.current = false
    handleWheel()
    //console.log('Index', indexRef.current)
    sections[indexRef.current].current?.scrollIntoView({ behavior: 'smooth' })
    setScroll(0)
    const timer = setTimeout(() => {
      canScroll.current = true
    }, 3e2)
    return () => clearTimeout(timer)
  }, [scroll])

  return [setScroll, canScroll]
}

export default useScrollSnap