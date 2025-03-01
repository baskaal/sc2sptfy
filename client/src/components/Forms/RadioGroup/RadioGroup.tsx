import { useState } from 'react'
import { filter, map, uniqueId } from 'lodash'
import { Radio } from '../Radio/Radio'
import { SRadioGroup } from './RadioGroup.styled'

export const RadioGroup = ({ options, onChange }) => {
  const [items, setItems] = useState(options)
  const radioGroupId = uniqueId()

  const handleOnChange = (value: boolean, index: number) => {
    const newItems = items.map((item) => ({ ...item, checked: false }))
    newItems[index].checked = value
    setItems(newItems)
    if (onChange) onChange(map(filter(newItems, 'checked'), 'value')[0])
  }

  return (
    <SRadioGroup>
      { items.map((radioProps, index: number) => (
        <Radio
          type="radio"
          name={radioGroupId}
          onChange={(value: boolean) => { handleOnChange(value, index) }}
          key={`${radioGroupId}-${index}`}
          {...radioProps}
        />
      )) || null }
    </SRadioGroup>
  )
}