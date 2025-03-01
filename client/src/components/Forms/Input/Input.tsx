import { comp } from 'csscomp'

export const Input = comp.input(
  {
    display: 'flex',
    width: '100%',
    padding: 'xs',
    border: 'thick',
    borderColor: 'primary',
    borderRadius: 'm',
    color: 'black',

    '&::placeholder': {
      color: 'grey[40]'
    }
  }
)