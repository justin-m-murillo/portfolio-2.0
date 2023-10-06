import './projects.css'
import React from 'react'
import { useCoreContext } from '@/context/CMSContext'
import SectionDivider from '../_subcomponents/SectionDivider'
import ProjectModule from '../_subcomponents/ProjectModule'

const Projects = () => {
  const { projectLists, pageInfo } = useCoreContext();
  const { projects } = projectLists[0];
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
        <div key={index} className='project-modules'>
          {index % 2 !== 0 
            ? <ProjectModule {...project} flip/>
            : <ProjectModule {...project} />
          }
          <SectionDivider />
        </div>
      ))}
    </div>
  )
}

export default Projects