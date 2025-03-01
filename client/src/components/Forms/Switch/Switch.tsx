import { useState } from 'react'
import { SSwitch, SSwitchIndicator } from './Switch.styled'

export const Switch = ({ onChange, initialValue = false }) => {
  const [active, setActive] = useState(initialValue)

  const onClick = () => {
    setActive(!active)
    onChange(!active)
  }

  return (
    <SSwitch active={active} onClick={onClick}>
      <SSwitchIndicator active={active} />
    </SSwitch>
  )
}
