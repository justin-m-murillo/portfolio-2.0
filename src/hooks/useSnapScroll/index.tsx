import { useState, useEffect, useRef, RefObject, MutableRefObject } from 'react'

const useSnapScroll = (sections: RefObject<HTMLElement>[]): 
  [React.Dispatch<React.SetStateAction<number>>] => 
{
  const [scroll, setScroll] = useState(0)
  const indexRef = useRef(0)

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
    handleWheel()
    console.log('Index', indexRef.current)
    sections[indexRef.current].current?.scrollIntoView({ behavior: 'smooth' })
    const timer = setTimeout(() => {
      setScroll(0)
    }, 5.8e2)
    return () => clearTimeout(timer)
  }, [scroll])

  return [setScroll]
}

export default useSnapScroll