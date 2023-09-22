import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'

type ErrorMessageProps = {
  message: string
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className='error-wrapper'>
      <BiErrorCircle size={24} />
      <p>
        {message}
      </p>
    </div>
  )
}

export default ErrorMessage