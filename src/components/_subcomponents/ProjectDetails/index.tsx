import React from 'react'
import { ButtonRow, Button, ButtonLink } from '../Button'

type ProjectDetailsProps = {
  name: string
  repoUrl: string
  showMedia: boolean
  setShowMedia: React.Dispatch<React.SetStateAction<boolean>>
  className?: string
}

const ProjectDetails = ({ name, showMedia, repoUrl, setShowMedia, className, }: ProjectDetailsProps) => {
  return (
    <div className={`module-element col ${className}`}>
      <div className='project-details text-banner'>
        <h1>{name}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt id aliquet risus feugiat in. Integer quis auctor elit sed vulputate mi sit amet mauris. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Diam quam nulla porttitor massa id neque aliquam.</p>
        <ButtonRow className='proj-btn-row'>
          {!showMedia 
            ? <Button title='Video Demo' onClick={() => {setShowMedia(true)}} border />
            : <Button title='Hide Demo' onClick={() => {setShowMedia(false)}} border />
          }
          <ButtonLink title='GitHub Repo' url={repoUrl} />
        </ButtonRow>
      </div>
    </div>
  )
}

export default ProjectDetails