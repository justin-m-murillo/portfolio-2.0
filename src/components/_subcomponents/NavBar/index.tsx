import React, { useState, } from 'react'
import { MdOutlineEmail } from 'react-icons/md'

import './navbar.css'
import NetworkIcon from '../NetworkIcon'
import { Button } from '../Button'
import { useSectionsContext } from '@/context/SectionsContext'

type NavbarProps = {}

const NavBar = (props: NavbarProps) => {
  const { sections } = useSectionsContext();
  const contactMeSection = sections.filter(sec => sec.id === 'contactme')[0];

  const handleScrollToContactMe = () => {
    contactMeSection?.ref?.current?.scrollIntoView({ block: 'start', })
  }

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
          <button className='contact-me-wrapper' onClick={() => handleScrollToContactMe()}>
            Contact Me
          </button>
        </div>
      </nav>
    </>
  )
}

export default NavBar