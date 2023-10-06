import { useCoreContext } from '@/context/CMSContext'
import './contactme.css'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactMe = () => {
  const { contactInfoLists } = useCoreContext();
  const { contacts } = contactInfoLists[0];
  const { name: email, value: mailToString } = contacts[0];
  const iconSize = 32;

  const icons = [
    <MdOutlineEmail key={'icon-1'} size={iconSize} />,
    <FaGithub key={'icon-2'} size={iconSize} />,
    <FaLinkedin key={'icon-3'} size={iconSize} />,
  ]

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `
      ${mailToString}?subject=${formData.subject}
      &body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  };

  return (
    <div className='module-container col align-center justify-center'>
      <div className='module-element col align-center justify-center'>
        <div className='text-banner'>
          <h1>Contact Me</h1>
        </div>
        <div className='subtext-banner align-center justify-center'>
          <p>Like what you see? <span className='emphasize'>Let&apos;s talk.</span></p>
        </div>
      </div>
      <div className='module-element col align-center justify-center'>
        <div className='contact-info'>
          {contacts.map((contact, index) => (
            <div key={index} className='contact-info-item'>
              <a target='_blank' href={contact.value}>
                <span>{icons[index]}</span>
              </a>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group'>
            <input {...register('name')} placeholder='Name' className='form-input' />
            <input {...register('email')} placeholder='Email' className='form-input' />
          </div>
          <input {...register('subject')} placeholder='Subject' className='form-input' />
          <textarea {...register('message')} placeholder='Message' className='form-input' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe