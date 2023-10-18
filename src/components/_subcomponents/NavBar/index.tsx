import React from 'react'

import './navbar.css'
import NetworkIcon from '../NetworkIcon'
import { useSectionsContext } from '@/context/SectionsContext'

const NavBar = () => {
  return (
    <>
      <nav>
        <div className='nav-wrapper'>
          <div>
            <button>
              <NetworkIcon url='https://github.com/justin-m-murillo' />
            </button>
            <button>
              <NetworkIcon url='https://www.linkedin.com/in/justin-m-murillo/' />
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar