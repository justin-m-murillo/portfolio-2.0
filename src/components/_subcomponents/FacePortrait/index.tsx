import './face-portrait.css'
import React from 'react'
import Image from 'next/image'

import facepic from '../../../public/portraitimg.jpg'

type Props = {}

const FacePortrait = (props: Props) => {
  const size = 256;
  return (
    <Image 
      src={facepic}
      width={size}
      height={size}
      alt='A portrait image of Justin Murillo'
      className='face-portrait'
    />
  )
}

export default FacePortrait