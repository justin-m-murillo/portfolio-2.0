import './projects.css'
import React from 'react'
import { usePageInfoContext, useProjectsContext } from '@/context/CMSContext'
import SectionDivider from '../_subcomponents/SectionDivider'
import ProjectModule from '../_subcomponents/ProjectModule'

const Projects = () => {
  const { projects } = useProjectsContext()
  const { pageInfo } = usePageInfoContext()
  const { title, subtitle } = pageInfo.filter(info => info.sectionId === 'projects')[0]

  return (
    <div className='module-container col project-container'>
      <div className='module-element col align-center justify-center'>
        <div className='text-banner align-center justify-center text-align-center'>
          {title?.map((elem, index) => (
            <h1 key={index}>{elem}</h1>
          ))}
        </div>
        <div className='subtext-banner align-center justify-center text-align-center'>
          {subtitle?.map((elem, index) => (
            <p key={index}>{elem}</p>
          ))}
        </div>
      </div>
      <SectionDivider />
      {projects.map((project, index) => (
        <div key={project._id} className='project-modules'>
          {index % 2 !== 0 
            ? <ProjectModule key={project._id} {...project} flip/>
            : <ProjectModule key={project._id} {...project} />
          }
          <SectionDivider />
        </div>
      ))}
    </div>
  )
}

export default Projects