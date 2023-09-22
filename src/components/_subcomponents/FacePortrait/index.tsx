import React from 'react'
import Image, { StaticImageData } from 'next/image'
import './face-portrait.css'

type FacePortraitProps = {
  src: string | StaticImageData
}

const FacePortrait = ({ src }: FacePortraitProps) => {
  const size = 400
  return (
    <Image 
      src={src}
      width={size}
      height={size}
      alt='A portrait image of Justin Murillo'
      className='face-portrait'
      priority
    />
  )
}

export default FacePortrait