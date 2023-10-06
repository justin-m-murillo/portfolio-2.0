import './footer.css'
import React from 'react'
import vercel from '../../../public/vercel-logotype-dark.png'
import Image from 'next/image'

const Footer = () => {

  const logo = () => (
    <Image 
      src={vercel}
      alt='vercel logo'
      height={16}
    />
  )

  return (
    <div className='footer-container'>
      <p>Hosted and powered by</p>
      <div>{logo()}</div>
    </div>
  )
}

export default Footer