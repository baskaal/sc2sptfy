import { comp, keyframes } from 'csscomp'

const spin = keyframes({
  to: { transform: 'rotate(360deg)' }
})

export const Spinner = comp.div({
  display: 'inline-block',
  width: '3rem',
  height: '3rem',
  border: '.3rem solid',
  borderColor: 'primary',
  borderRadius: '50%',
  borderRightColor: 'transparent',
  animation: `${spin} 1s linear infinite`
})
