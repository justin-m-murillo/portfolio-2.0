import './projImg.css'
import React from 'react'
import Image from 'next/image'

import { sanityClient } from '@/utils/configSanity'
import { useNextSanityImage } from 'next-sanity-image'
import { TImage } from '@/typings'

type ProjectImgProps = {
  image: TImage
}

const ProjectImg = ({ image }: ProjectImgProps) => {
  const imgProps = useNextSanityImage(sanityClient, image)

  return (
    <div className='img'>
      <Image 
        {...imgProps}
        alt={''}
        style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
      />
    </div>
  )
}

export default ProjectImg