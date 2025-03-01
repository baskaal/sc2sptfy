import { comp } from "csscomp"

const TitleSizes = {
  h1: '1.75em',
  h2: '1.5em',
  h3: '1.25em',
  h4: '1em',
  h5: '1em',
  h6: '1em'
}

export const Title = comp.h1<{ as: keyof typeof TitleSizes }>(({ as = 'h1' }) => ({
  fs: TitleSizes[as],
  fw: 'bold'
}))