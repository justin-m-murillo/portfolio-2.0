import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'

import { sanityClient } from '@/utils/configSanity'
import { useNextSanityImage } from 'next-sanity-image'
import { TImage } from '@/typings'
import { useWindowDimensions } from '@/hooks/useWindowDimensions'

type ProjectImgProps = {
  image: TImage;
  imgIndex: number;
  viewIndex: number;
  setViewIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ProjectImg = ({ image, imgIndex, viewIndex, setViewIndex }: ProjectImgProps) => {
  const imgProps = useNextSanityImage(sanityClient, image)
  const { width } = useWindowDimensions();

  return (
    <div
      className={`
        ${imgIndex === viewIndex
          ? 'img-animate-grow'
          : 'img-animate-shrink'
        } img`}
      onClick={() => width > 800 && setViewIndex(imgIndex)}
    >
      <Image 
        {...imgProps}
        alt={''}
        style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
      />
    </div>
  )
}

export default ProjectImg;

const calcImgCss = (screenWidth: number, imgIndex: number, viewIndex: number) => {
  return (
    screenWidth > 800
      ? imgIndex === viewIndex
        ? 'img-animate-grow'
        : 'img-animate-shrink'
      : ''
  );
}