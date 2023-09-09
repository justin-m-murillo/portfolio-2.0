'use client'
import Home from "@/components/Home"
import IconRow from "@/subcomponents/IconRow"

export default function Index() {
  return (
    <main 
      className="main"
      onWheel={(e) => {
        console.log(e.deltaY)
      }}
    >

      {/* Icons */}
      <nav style={{ position: 'fixed', width: '100%' }}>
        <IconRow />
      </nav>

      {/* Home */}
      <section className="main-child">
        <Home />
      </section>
      {/* <section className="main-child">
        <Home />
      </section> */}
    </main>
  )
}
