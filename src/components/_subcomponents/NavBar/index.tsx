import React, { useState, } from 'react'
import { MdMenu } from 'react-icons/md'

import './navbar.css'
import NavBarSide from '../NavBarSide'
import NetworkIcon from '../NetworkIcon'

type NavbarProps = {}

const NavBar = (props: NavbarProps) => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false)
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