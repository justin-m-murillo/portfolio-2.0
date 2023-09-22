import './videoplayer.css'
import React from 'react'

type VideoPlayerProps = {
  src: string
}

const VideoPlayer = ({ src }: VideoPlayerProps) => {
  return (
    <div className='aspect-ratio--16x9'>
      <video width={750} controls>
        <source src={src} type='video/mp4' />
      </video>
    </div>
  )
}

export default VideoPlayer