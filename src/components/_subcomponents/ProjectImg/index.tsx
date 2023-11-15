import styles from './projectimg.module.css'
import React from 'react'
import Image from 'next/image'
import { sanityClient } from '@/utils/configSanity'
import { useNextSanityImage } from 'next-sanity-image'
import { TImage } from '@/typings'

type ProjectImgProps = {
  image: TImage;
}

const ProjectImg = ({ image }: ProjectImgProps) => {
  const imgProps = useNextSanityImage(sanityClient, image);

  return (
    <Image
      {...imgProps}
      className={styles.image}
      alt={''}
      priority
      onClick={() => window.open(imgProps.src)}
    />
  )
}

export default ProjectImg;