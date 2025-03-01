import { comp } from "csscomp";

export const TextArea = comp.textarea({
  display: 'flex',
  width: '100%',
  minHeight: '5rem',
  padding: 'xs',
  border: 'thick',
  borderColor: 'primary',
  borderRadius: 'm',
  backgroundColor: 'transparent',

  '&::placeholder': {
    color: 'grey.40'
  }
})
