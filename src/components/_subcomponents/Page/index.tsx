import './page.css'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode,
}

const Page = ({ children }: Props) => {
  return (
    <div className='page-container'>
      { children }
    </div>
  )
}

export default Page