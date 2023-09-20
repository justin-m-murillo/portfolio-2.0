import './navbar-side.css'
import React from 'react'
import { MdClose } from 'react-icons/md'

type NavSideBarProps = {
  showSideBar: boolean
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>
}

const NavBarSide = ({ showSideBar, setShowSideBar }: NavSideBarProps) => {
  const options = [
    'about me',
    'skills',
    'projects',
    'contact me'
  ]
  return (
    <nav className={`nav-side-root ${showSideBar && 'active'}`}>
      <div className='content-wrapper'>
        <div>
          <button onClick={() => setShowSideBar(false)}>
            <MdClose size={36} />
          </button>
        </div>
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBarSide