import React from 'react'
import { useVideoContext } from '@/context/CMSContext'

const Projects = () => {
  const { video } = useVideoContext()
  console.log(video[0])
  return (
    <div>
      <p>Projects</p>
    </div>
  )
}

export default Projects