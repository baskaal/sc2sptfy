import { comp } from 'csscomp'

const SCard = comp.div({
  width: '100%',
  border: 'main',
  borderColor: 'primary',
  borderRadius: 'm',
  overflow: 'hidden'
})

const SCardHeader = comp.div({
  padding: 's',
  borderColor: 'primary',
  borderBottom: 'main',
  backgroundColor: 'primary',
  color: 'white'
})

const SCardContent = comp.div({
  padding: 's'
})

const SCardFooter = comp.div({
  padding: 's',
  borderColor: 'primary',
  backgroundColor: 'grey[20]',
  color: 'black'
})

export const Card = ({ header, footer, children, ...props }) => {
  return (
    <SCard {...props}>
      {header && <SCardHeader>{header}</SCardHeader>}
      <SCardContent>{children}</SCardContent>
      {footer && <SCardFooter>{footer}</SCardFooter>}
    </SCard>
  )
}
