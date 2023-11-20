import { useSectionsContext } from '@/context/SectionsContext';
import './contactmebtn.css'
import React from 'react'
import { Button, ButtonLink } from '../Button';


const ContactMeBtn = () => {
  const { sections } = useSectionsContext();
  const contactMeSection = sections.filter(sec => sec.id === 'contactme')[0];
  const handleScrollToContactMe = () => {
    contactMeSection?.ref?.current?.scrollIntoView({ block: 'start', })
  }

  return (
    <div className='contact-me-wrapper'>
      <p>Contact Me</p>
    </div>
  )
}

export default ContactMeBtn