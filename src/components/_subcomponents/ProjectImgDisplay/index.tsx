import { TImage } from '@/typings'
import React from 'react'
import ErrorMessage from '../ErrorMessage';
import { useWindowDimensions } from '@/hooks/useWindowDimensions';
import ImageRow from '../ImageRow';

type ProjectImgDisplayProps = {
  images: TImage[];
}

const ProjectImgDisplay = ({ images }: ProjectImgDisplayProps) => {
  const { width } = useWindowDimensions();

  return (
    <div className='img-display-wrapper'>
      {images?.length
        ? <ImageRow images={images} />
        : <ErrorMessage message='Images not available' />
      }
    </div>
  )
}

export default ProjectImgDisplay