import './icon-row.css'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

interface IconProps {
  url: string,
  network?: string,
}

const Icon = ({ url, network }: IconProps) => {
  return (
    <SocialIcon 
      url={url}
      network={network}
      className='icon'
    />
  )
}

const IconRow = () => {
  return (
    <header className='header'>
      <div className='icon-group'>
        <Icon url='https://github.com/justin-m-murillo' />
        <Icon url='https://github.com/justin-m-murillo' />
      </div>
      <div>
        <Icon url='justin.murillo5@gmail.com' network='email' />
      </div>
    </header>
  )
}

export default IconRow