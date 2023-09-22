import React, { MouseEventHandler, ReactNode } from 'react'
import './button.css'

type AbstractProps = {
  title: string
  border?: boolean
}

type ButtonProps = AbstractProps & {
  onClick: MouseEventHandler<HTMLButtonElement>
}

type ButtonLinkProps = AbstractProps & {
  url: string
}

type ButtonRowProps = {
  children: ReactNode
  className?: string
}

export const Button = ({ title, onClick, border=false, }: ButtonProps) => {
  return (
    <button type='button' className={`btn ${border && 'btn-border'}`} onClick={onClick}>
      <span>{ title }</span>
    </button>
  )
}

export const ButtonLink = ({ title, url, border=false, }: ButtonLinkProps) => {
  return (
    <a href={url} className={`btn`}>{title}</a>
  )
}

export const ButtonRow = ({ children, className }: ButtonRowProps) => {
  return (
    <div className={`module-element btn-row ${className}`}>
      { children }
    </div>
  )
}