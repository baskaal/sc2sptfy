import { comp } from "csscomp";

export const Spacer = comp.div<{ gutter: number, direction?: 'column' | 'row' }>(({ gutter = 4, direction = 'column' }) => ({
  d: 'flex',
  fxd: direction,

  ...(direction === 'column' ? {
    jc: 'center'
  } : {
    ai: 'center'
  }),

  '> :not(:last-child)': {
    ...(direction === 'column' ? {
      mb: gutter
    } : {
      mr: gutter
    })
  }
}))