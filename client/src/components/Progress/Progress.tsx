import { comp } from 'csscomp'

export const SProgress = comp.div({
  display: 'flex',
  flexGrow: 1,
  height: '8px',
  border: 'main',
  borderColor: 'primary'
})

export const SProgressActive = comp.div(({ amount }) => ({
  display: 'inline-flex',
  width: amount && `${amount}%`,
  height: '100%',
  backgroundColor: 'primary'
}))

export const Progress = ({ amount, ...props }) => {
  return (
    <SProgress {...props}>
      <SProgressActive amount={amount} />
    </SProgress>
  )
}