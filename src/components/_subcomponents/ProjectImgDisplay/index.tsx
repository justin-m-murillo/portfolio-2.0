import { TImage } from '@/typings'
import React, { useState } from 'react'
import ErrorMessage from '../ErrorMessage';
import ProjectImg from '../ProjectImg';

type ProjectImgDisplayProps = {
  images: TImage[];
}

const ProjectImgDisplay = ({ images }: ProjectImgDisplayProps) => {
  const [viewIndex, setViewIndex] = useState<number>(0);

  return (
    <ul className={`img-display-wrapper`}>
      {/* {images && <ProjectImg key={images[0].toString()} image={images[0]} />} */}
      {images?.length
        ? images.map((img, index) => (
          <ProjectImg 
            key={index} 
            image={img} 
            imgIndex={index} 
            viewIndex={viewIndex}
            setViewIndex={setViewIndex}
          />
        ))
        : <ErrorMessage message='Images not available' />
      }
    </ul>
  )
}

export default ProjectImgDisplay