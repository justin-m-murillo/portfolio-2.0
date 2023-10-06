import { TImage } from '@/typings'
import React from 'react'
import ErrorMessage from '../ErrorMessage';
import { useWindowDimensions } from '@/hooks/useWindowDimensions';
import ImageRow from '../ImageRow';
import ImageCarousel from '../ImageCarousel';

type ProjectImgDisplayProps = {
  images: TImage[];
}

const ProjectImgDisplay = ({ images }: ProjectImgDisplayProps) => {
  const { width } = useWindowDimensions();

  return (
    <div className='img-display-wrapper'>
      {images?.length
        ? <ImageRow images={images} />
        // ? width < 1100
        //   ? <ImageCarousel images={images} />
        //   : <ImageRow images={images} />
        : <ErrorMessage message='Images not available' />
      }
    </div>
  )
}

export default ProjectImgDisplay