import { useState } from 'react'

export const useSideNavSwitch = (state: boolean) => {
  const [status, setStatus] = useState(state)
  const handleSideNav = () => {
    setStatus((preValue) => !preValue)
  }

  return { status, handleSideNav }
}
