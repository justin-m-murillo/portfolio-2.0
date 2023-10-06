import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { sanityClient } from '@/utils/configSanity'
import { useNextSanityImage } from 'next-sanity-image'
import { TImage } from '@/typings'

type ProjectImgProps = {
  image: TImage;
}

const ProjectImg = ({ image }: ProjectImgProps) => {
  const imgProps = useNextSanityImage(sanityClient, image)

  return (
    <Image 
      {...imgProps}
      alt={''}
      style={{ display: 'flex', width: 'auto', height: '100%', borderRadius: '12px' }}
      priority
    />
  )
}

export default ProjectImg;