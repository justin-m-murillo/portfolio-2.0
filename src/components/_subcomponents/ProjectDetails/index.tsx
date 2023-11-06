import React from 'react'
import { ButtonRow, ButtonLink } from '../Button'

type ProjectDetailsProps = {
  name: string
  description: string[]
  demoUrl: string
  repoUrl: string
}

const ProjectDetails = ({ name, description, demoUrl, repoUrl }: ProjectDetailsProps) => {
  return (
    <div className='project-details text-banner'>
      <h1>{name}</h1>
      <div className='description-wrapper'>
        {description?.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
      <ButtonRow className='proj-btn-row'>
        {demoUrl && <ButtonLink title='Live Demo' url={demoUrl} border />}
        <ButtonLink title='GitHub Repo' url={repoUrl} />
      </ButtonRow>
    </div>
  )
}

export default ProjectDetails