import { comp } from "csscomp"

export const SSwitch = comp.div(({ active }) => ({
  width: '2.4rem',
  height: '1.2rem',
  padding: '.125rem',
  border: 'thick',
  borderColor: 'primary',
  borderRadius: '1rem',
  cursor: 'pointer',
  transition: 'all .2s ease',

  ...(active && {
    backgroundColor: 'primary'
  })
}))

export const SSwitchIndicator = comp.div(({ active }) => ({
  width: '50%',
  height: '100%',
  borderRadius: '1rem',
  backgroundColor: 'primary',
  transition: 'all .2s ease',

  ...(active && {
    backgroundColor: 'white',
    transform: 'translateX(100%)'
  })
}))
