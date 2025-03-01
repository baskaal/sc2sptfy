import { comp } from 'csscomp'

export const SRadio = comp.label(
  {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  }
)

export const SRadioInput = comp.div(({ checked }) => ({
  position: 'relative',
  display: 'flex',
  width: '1.2rem',
  height: '1.2rem',
  border: 'thick',
  borderColor: 'currentColor',
  borderRadius: '100%',
  color: 'primary',

  '&:before': {
    width: '.7rem',
    height: '.7rem',
    margin: 'auto',
    borderRadius: '100%',
    content: '""',

    ...(checked && {
      backgroundColor: 'currentColor'
    })
  }
}))

export const SRadioLabel = comp.div({
  marginLeft: 's'
})
