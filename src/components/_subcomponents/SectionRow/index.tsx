import Link from 'next/link'
import React from 'react'

type SectionRowProps = {
  sections: {
    name: string,
    href: string,
  }[]
}

const SectionRow = ({ sections }: SectionRowProps) => {
  return (
    <nav>
      {sections.map(section => 
        <Link href={section.href}>
          <button>{section.name}</button>
        </Link>
      )}
    </nav>
  )
}

export default SectionRow