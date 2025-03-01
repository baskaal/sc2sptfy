import { comp, rgba } from 'csscomp'

export const SPopupWrapper = comp.div({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,
  padding: 'm',
  zIndex: 9999
})

export const SPopupCloser = comp.div({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: rgba('black', 0.25),
  cursor: 'pointer'
})

export const SPopup = comp.div({
  position: 'relative',
  width: '100%',
  maxWidth: '640px',
  borderRadius: 'm',
  backgroundColor: 'grey.15',
  overflow: 'hidden'
})

export const SPopupHeader = comp.div({
  display: 'flex',
  alignItems: 'center',
  borderBottom: 'main',
  color: 'primary'
})

export const SPopupHeaderContent = comp.div({
  flexGrow: 1,
  alignItems: 'center',
  paddingY: 's',
  paddingX: 'm'
})

export const SPopupContent = comp.div({
  display: 'flex',
  paddingY: 's',
  paddingX: 'm'
})

export const SPopupFooter = comp.div({
  display: 'flex',
  paddingY: 's',
  paddingX: 'm'
})

export const SPopupCloseButton = comp.div({
  paddingX: 's',
  cursor: 'pointer'
})
