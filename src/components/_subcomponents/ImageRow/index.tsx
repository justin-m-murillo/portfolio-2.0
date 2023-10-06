import { TImage } from '@/typings';
import React from 'react'
import ProjectImg from '../ProjectImg';

type ImageRowProps = {
  images: TImage[];
}

const ImageRow = ({ images }: ImageRowProps) => {
  
  return (
    <ul>
      {images.map((img, index) => (
          <li key={index}>
            <ProjectImg image={img} />
          </li>
        ))
      }
    </ul>
  )
}

export default ImageRow