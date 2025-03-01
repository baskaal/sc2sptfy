import { comp } from 'csscomp'

export const SRadioGroup = comp.div({
  '> *': {
    marginBottom: 'xs',

    ':last-child': {
      marginBottom: 0
    }
  }
})
