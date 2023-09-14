import { useEffect } from "react"

type useKeyDownListenerProps = {
  handleInput: (e: KeyboardEvent) => void
}

export const useKeyDownListener = ({ handleInput }: useKeyDownListenerProps) => {
  useEffect(() => {
    window.addEventListener('keydown', e => {handleInput(e)})
    return window.removeEventListener('keydown', e => {handleInput(e)})
  }, [])
}