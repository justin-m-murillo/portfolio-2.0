'use client'
import IconRow from "@/components/_subcomponents/IconRow"
import { useScrollSnap } from '@/hooks/useScrollSnap'
import { NavIndexContext } from '@/context/NavIndexContext'

import { getSections } from '@/static_data'
import { useKeyDownListener } from "@/hooks/useScrollArrows"

export default function Index() {
  const sections = getSections()
  const {setScroll, index, setIndex, canScroll} = useScrollSnap({
    sections: sections.map(section => section.ref),
  })

  const handleArrowKey = (e: globalThis.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown': setScroll(1); break;
      case 'ArrowUp': setScroll(-1); break;
    }
  }
  useKeyDownListener({ handleInput: handleArrowKey })

  return (
    <NavIndexContext.Provider value={{ 
      navIndex: index, 
      setNavIndex: setIndex 
    }}>
      <main
        className="main"
        onWheel={e => {
          if (canScroll.current) {
            setScroll(e.deltaY)
            e.deltaY = 0
        }}}
      >
        {/* Icons */}
        <nav>
          <IconRow />
        </nav>

        {/* Sections */}
        {sections.map(sec => (
          <section key={sec.id} id={sec.id} ref={sec.ref}>
            {sec.component}
          </section>
        ))}
      </main>
    </NavIndexContext.Provider>
  )
}
