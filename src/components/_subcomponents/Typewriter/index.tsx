import './typewriter.css'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type TypewriterProps = {
  words: string[]
}

const Typewriter = ({ words }: TypewriterProps) => {
  const [ text ] = useTypewriter({
    words: words,
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className='typewriter-container'>
      <span className='typewriter-word'>
        {text}
      </span>
      <span className='typewriter-cursor'>
        <Cursor />
      </span>
    </div>
  )
}

export default Typewriter