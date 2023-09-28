import React, { ReactNode } from 'react'
import './pagewrapper.css'

type PageWrapperProps = {
  title: string
  children: ReactNode
  hideTitle?: boolean
}

const PageWrapper = ({ title, children, hideTitle=false }: PageWrapperProps) => {
  return (
    <div className='page'>
      {!hideTitle && 
        <div className='page-title'>
          <span className='page-title'>{title}</span>
        </div>
      }
      { children }
    </div>
  )
}

export default PageWrapper