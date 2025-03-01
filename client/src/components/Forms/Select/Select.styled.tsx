import { comp } from 'csscomp'

export const SSelect = comp.div({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  cursor: 'pointer'
})

export const SSelectInput = comp.select({
  width: '100%',
  p: 'xs',
  pr: '2rem',
  border: 'thick',
  borderColor: 'primary',
  borderRadius: 'm',
  bgc: 'transparent',
  color: 'currentColor',
  cursor: 'pointer',
  overflow: 'hidden',

  option: {
    py: 'xxs'
  }
})

export const SSelectIcon = comp.div({
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  right: 0,
  height: '100%',
  paddingX: 's',
  color: 'primary',
  pointerEvents: 'none',

  svg: {
    maxWidth: '1rem',
    strokeWidth: 3,
    stroke: 'currentColor'
  }
})
