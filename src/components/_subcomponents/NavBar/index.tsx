import React from 'react'

import './navbar.css'
import NetworkIcon from '../NetworkIcon'
import ContactMeBtn from '../ContactMeBtn'

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
          <div>
            <ContactMeBtn />
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar