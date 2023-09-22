import { TImage } from '@/typings'
import React from 'react'
import ErrorMessage from '../ErrorMessage'
import ProjectImg from '../ProjectImg'
import VideoPlayer from '../VideoPlayer'

type ProjectVideoProps = {
  images: TImage[]
  downloadUrl: string
  showMedia: boolean
  className?: string
}

const ProjectVideo = ({ images, downloadUrl, showMedia, className, }: ProjectVideoProps) => {
  return (
    <div className={`module-element row media-module ${className}`}>
      {!showMedia 
        ? 
        <div className='img-wrapper'>
          {images?.length 
            ? images?.map(img => <ProjectImg key={img.asset._ref} image={img} />)
            : <ErrorMessage message='Images not available' />
          }
        </div>
        : 
        <VideoPlayer src={downloadUrl} />
      }
    </div>
  )
}

export default ProjectVideo