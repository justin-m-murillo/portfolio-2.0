import './projModule.css'
import { TImage } from '@/typings'
import React, { useState } from 'react'

import { useFireVideos } from '@/hooks/useFireStorage'
import ProjectDetails from '../ProjectDetails'
import ProjectVideo from '../ProjectVideo'

type ProjectModuleProps = {
  name: string
  images: TImage[]
  videoUrl: string
  repoUrl: string
  flip?: boolean
}

const ProjectModule = ({ name, images, videoUrl, repoUrl, flip=false }: ProjectModuleProps) => {
  const [showMedia, setShowMedia] = useState<boolean>(false)
  const { downloadUrl } = useFireVideos(videoUrl)

  return (
    <div className='module-container row'>
      <div className='module-container row proj-module-container'>
        <ProjectDetails 
          name={name}
          repoUrl={repoUrl}
          showMedia={showMedia}
          setShowMedia={setShowMedia}
          className={flip ? 'flex-flip-2' : undefined}
        />
        <ProjectVideo 
          images={images}
          downloadUrl={downloadUrl}
          showMedia={showMedia}
          className={flip ? 'flex-flip-1' : undefined}
        />
      </div> 
    </div>
  )
}

export default ProjectModule