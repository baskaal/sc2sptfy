
import { comp } from 'csscomp'

export const SCheckboxGroup = comp.div({
  '> *': {
    marginBottom: 'xs',

    ':last-child': {
      marginBottom: 0
    }
  }
})
