import React from 'react'
import Image, { StaticImageData } from 'next/image'

type FacePortraitProps = {
  src: string | StaticImageData
  size?: number
  rounded?: boolean
}

const FacePortrait = ({ src, size=256, rounded }: FacePortraitProps) => {
  return (
    <Image 
      src={src}
      width={size}
      height={size}
      alt='A portrait image of Justin Murillo'
      style={{ 
        display: 'flex',
        borderRadius: rounded ? '50%' : 0 
      }}
    />
  )
}

export default FacePortrait