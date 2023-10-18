import { useSectionsContext } from '@/context/SectionsContext';
import './contactmebtn.css'
import React from 'react'
import { Button } from '../Button';


const ContactMeBtn = () => {
  const { sections } = useSectionsContext();
  const contactMeSection = sections.filter(sec => sec.id === 'contactme')[0];
  const handleScrollToContactMe = () => {
    contactMeSection?.ref?.current?.scrollIntoView({ block: 'start', })
  }

  return (
    <Button title='Contact Me' onClick={() => handleScrollToContactMe()} />
  )
}

export default ContactMeBtn