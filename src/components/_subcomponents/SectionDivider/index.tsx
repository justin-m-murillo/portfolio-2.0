import React from 'react'

type SectionDividerProps = {
  margin?: string
}

const SectionDivider = ({ margin='4rem 0' }: SectionDividerProps) => {
  return (
    <div style={{ margin: margin }}/>
  )
}

export default SectionDivider