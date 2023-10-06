import './projModule.css'
import { TImage } from '@/typings'
import React from 'react'

import ProjectDetails from '../ProjectDetails'
import ProjectImg from '../ProjectImg'
import ErrorMessage from '../ErrorMessage'
import ProjectImgDisplay from '../ProjectImgDisplay'

type ProjectModuleProps = {
  name: string
  description: string[]
  images: TImage[]
  demoUrl: string
  repoUrl: string
  flip?: boolean
}

const ProjectModule = ({ name, description, images, demoUrl, repoUrl, flip=false }: ProjectModuleProps) => {
  return (
    <div className='module-container row'>
      <div className='module-container row proj-module-container'>
        <div className={`module-element col ${flip ? 'flex-flip-2' : null}`}>
          <ProjectDetails 
            name={name}
            description={description}
            demoUrl={demoUrl}
            repoUrl={repoUrl}
          />
        </div>
        <div className={`module-element ${flip ? 'flex-flip-1' : null}`}>
          <ProjectImgDisplay 
            images={images}
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectModule