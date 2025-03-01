import { comp } from "csscomp";

export const Row = comp.div<{ gutter: string }>(({ theme, css, gutter = 4 }) => ({
  d: 'flex',
  fxd: 'row',
  fxw: css.flexWrap || 'wrap',
  jc: 'center',
  w: gutter && `calc(100% + ${theme.space[gutter]})`,
  mx: gutter && `calc(-${theme.space[gutter]} / 2)`,

  '> *': {
    mb: css.flexWrap === 'wrap' && gutter && `calc(${theme.space[gutter]})`,
    px: gutter && `calc(${theme.space[gutter]} / 2)`
  }
}))