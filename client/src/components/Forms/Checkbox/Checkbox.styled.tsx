import { comp } from "csscomp"

export const SCheckbox = comp.label(
  {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  }
)

export const SCheckboxInput = comp.div(({ checked }) => ({
  position: 'relative',
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  width: '1.2rem',
  height: '1.2rem',
  border: 'thick',
  borderColor: 'currentColor',
  borderRadius: 'm',
  color: 'primary',
  cursor: 'pointer',

  '&:before': {
    width: '.7rem',
    height: '.7rem',
    m: 'auto',
    borderRadius: 'xs',
    content: '""',

    ...(checked && {
      backgroundColor: 'currentColor'
    })
  }
}))

export const SCheckboxLabel = comp.div({
  ml: 's'
})
