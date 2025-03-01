import { comp } from 'csscomp'
import { isArray } from 'lodash'

export const Col = comp.div<{ width: number }>(({ width }) => ({
  pos: 'relative',
  fxd: 'column',
  fxg: 1,

  ...(width !== undefined && {
    fxb: isArray(width) ? width.map((w) => `${w}%`) : `${width}%`,
    fxg: 0,
    fxs: 0,
    miw: isArray(width) ? width.map((w) => `${w}%`) : `${width}%`
  })
}))