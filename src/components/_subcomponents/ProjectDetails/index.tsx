import React from 'react'
import { ButtonRow, Button, ButtonLink } from '../Button'

type ProjectDetailsProps = {
  name: string
  demoUrl: string
  repoUrl: string
}

const ProjectDetails = ({ name, demoUrl, repoUrl }: ProjectDetailsProps) => {
  return (
    <div className='project-details text-banner'>
      <h1>{name}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt id aliquet risus feugiat in. Integer quis auctor elit sed vulputate mi sit amet mauris. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Diam quam nulla porttitor massa id neque aliquam.</p>
      <ButtonRow className='proj-btn-row'>
        <ButtonLink title='Live Demo' url={demoUrl} border />
        <ButtonLink title='GitHub Repo' url={repoUrl} />
      </ButtonRow>
    </div>
  )
}

export default ProjectDetails