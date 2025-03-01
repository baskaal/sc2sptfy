import { useState } from 'react'
import { filter, map } from 'lodash'
import { Checkbox } from '../Checkbox/Checkbox'
import { SCheckboxGroup } from './CheckboxGroup.styled'

export const CheckboxGroup = ({ options, onChange }) => {
  const [items, setItems] = useState([...options])

  const handleOnChange = (value: boolean, index: number) => {
    const newItems = [...items]
    newItems[index].checked = value
    setItems(newItems)
    if (onChange) onChange(map(filter(newItems, 'checked'), 'value'))
  }

  return (
    <SCheckboxGroup>
      { items.map((checkboxProps, index: number) => (
        <Checkbox
          onChange={(value: boolean) => { handleOnChange(value, index) }}
          key={`checkbox-group-item-${index}`}
          {...checkboxProps}
        />
      )) || null }
    </SCheckboxGroup>
  )
}
