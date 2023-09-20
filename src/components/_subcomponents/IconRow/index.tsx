import { useWindowDimensions } from '@/hooks/useWindowDimensions'
import './icon-row.css'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { MdMenu } from 'react-icons/md'

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
  const { width } = useWindowDimensions()
  return (
    <header className='header'>
      <button>
        <MdMenu size={32} />
      </button>
    </header>
  )
}

export default IconRow