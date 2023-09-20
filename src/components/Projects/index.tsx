import React from 'react'
import MuxPlayer from '@mux/mux-player-react'
import { useVideoContext } from '@/context/CMSContext'

const Projects = () => {
  const { video } = useVideoContext()
  console.log(video[0])
  return (
    <div>
      <p>Projects</p>
      <MuxPlayer 
        streamType='on-demand'
        playbackId={'tuT8cFIclClMJgvcUjnBFfYv5ZI01DC5axM9qfyA5fro'}
      />
    </div>
  )
}

export default Projects