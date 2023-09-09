import { useState, useEffect, useRef, RefObject, MutableRefObject } from 'react'

type UseSnapScrollProps = {
  sections: RefObject<HTMLElement>[]
}

const useSnapScroll = (sections: RefObject<HTMLElement>[]): 
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
    canScroll.current = false
    handleWheel()
    sections[indexRef.current].current?.scrollIntoView({ behavior: 'smooth' })
    const timer = setTimeout(() => {
      setScroll(0)
      canScroll.current = true
    }, 6e2)
    return () => clearTimeout(timer)
  }, [scroll])

  return [setScroll, canScroll]
}

export default useSnapScroll