'use client'
import IconRow from "@/components/_subcomponents/IconRow"
import { useScrollSnap } from '@/hooks/useScrollSnap'
import { NavIndexContext } from '@/context/NavIndexContext'

import { getSections } from '@/static_data'

export default function Index() {
  const sections = getSections()
  const {setScroll, index, setIndex, canScroll}= useScrollSnap({
    sections: sections.map(section => section.ref),
  })

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
