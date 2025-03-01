import { Login, Logo, Spacer, Text } from '@/components'

export default function Home() {
  return (
    <Spacer gutter={10} css={{ alignItems: 'center', justifyContent: 'center' }}>
      <Spacer css={{ alignItems: 'center', justifyContent: 'center' }}>
        <Logo />
        <Text css={{ textAlign: 'center' }}>Transfer your Soundcloud data to Spotify</Text>
      </Spacer>
      <Login />
    </Spacer>
  )
}
