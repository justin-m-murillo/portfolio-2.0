'use client'
import IconRow from "@/components/_subcomponents/IconRow"
import { useScrollSnap } from '@/hooks/useScrollSnap'

import { getSections } from '@/static_data'

export default function Index() {
  const sections = getSections()
  const [setScroll, canScroll] = useScrollSnap({
    sections: sections.map(section => section.ref)
  })

  return (
    <main 
      className="main"
      onWheel={e => {
        if (canScroll.current) {
          //console.log('Delta', e.deltaY)
          setScroll(e.deltaY)
          e.deltaY = 0
        }
      }}
    >

      {/* Icons */}
      <nav style={{ position: 'fixed', width: '100%' }}>
        <IconRow />
      </nav>

      {sections.map(section => (
        <section key={section.id} id={section.id} ref={section.ref}>
          {section.component}
        </section>
      ))}
      
    </main>
  )
}
