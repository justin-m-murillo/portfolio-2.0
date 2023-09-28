import './page.css'
import React, { ReactNode } from 'react'

type Props = {
  backgroundColor?: string
  backgroundImage?: string
  children: ReactNode
}

const Page = ({ backgroundColor='white', children }: Props) => {
  return (
    <div 
      className='page' 
      style={{ backgroundColor, backgroundImage: 'linear-gradient(to right, red, yellow)' }}
    >
      { children }
    </div>
  )
}

export default Page