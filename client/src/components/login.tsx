import { Button } from '@/components'
import useSpotify from '@/hooks/useSpotify'

export function Login() {
  const { login } = useSpotify()

  return (
    <Button sptfy onClick={login}>Authenticate with Spotify</Button>
  )
}
