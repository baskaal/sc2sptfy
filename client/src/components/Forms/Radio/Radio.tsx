import { type ChangeEvent, useState } from 'react'
import { SRadio, SRadioInput, SRadioLabel } from './Radio.styled'

export const Radio = ({ onChange, checked: initChecked, label, icon, name, ...props }) => {
  const [checked, setIsChecked] = useState(initChecked || false)

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
    if (onChange) onChange(event.target.checked)
  }

  return (
    <SRadio {...props}>
      <input name={name} type="radio" onChange={handleOnChange} style={{ display: 'none' }} />
      <SRadioInput checked={checked} />
      {label && <SRadioLabel>{label}</SRadioLabel>}
    </SRadio>
  )
}
