import React from 'react'
import { SocialIcon } from 'react-social-icons'

type NetworkIconProps = {
  url: string,
  network?: string,
}

const NetworkIcon = ({ url, network }: NetworkIconProps) => {
  return (
    <SocialIcon 
      url={url}
      network={network}
      className='icon'
    />
  )
}

export default NetworkIcon