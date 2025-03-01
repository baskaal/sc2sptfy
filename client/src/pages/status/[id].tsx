import { Spacer, Text, Button, Box, Link } from '@/components'
import { Loader } from '@/components/loader'
import useApi from '@/hooks/useApi'
import { THEME } from '@/style';
import { ChevronsRight } from 'react-feather';

export default function Who() {
  const { status, cancel } = useApi()

  const isCompleted = status?.progress === 100

  return (
    <Spacer gutter={5} css={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <Spacer gutter={3} css={{ justifyContent: 'center', alignItems: 'center' }}>
        <Spacer gutter={2} css={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Link href={`https://soundcloud.com/${status?.scUser?.id}`}>
            <Text css={{ display: 'inline-flex', color: 'sc' }}>{ status?.scUser?.username }</Text>
          </Link>
          <ChevronsRight size={16} color={THEME.colors.primary} />
          <Link href={`https://open.spotify.com/user/${status?.sptfyUser?.id}`}>
            <Text css={{ display: 'inline-flex', color: 'sptfy' }}>{ status?.sptfyUser?.display_name }</Text>
          </Link>
        </Spacer>
        <Spacer css={{ flexDirection: 'row', fontSize: 's', color: 'primary', justifyContent: 'center', alignItems: 'center' }}>
          <Spacer gutter={1} css={{ width: 'auto', flexDirection: 'row' }}>
            <Text css={{ color: 'greys.60' }}>Progress:</Text>
            <Text css={{ color: 'white' }}>{ status?.currentItem || 0 } / { status?.totalItems || 0}</Text>
          </Spacer>
          <Spacer gutter={1} css={{ width: 'auto', flexDirection: 'row' }}>
            <Text css={{ color: 'greys.60' }}>Matches:</Text>
            <Text css={{ color: 'sptfy' }}>{ status?.matchCount || 0 } ({ status?.accuracy }%)</Text>
          </Spacer>
        </Spacer>
      </Spacer>
      <Loader progress={status?.progress} />
      { isCompleted ? (
        <Box df fdc aic>
          <Link href={`https://open.spotify.com/playlist/${status?.playlistId}`} target='_blank'>
            View playlist
          </Link>
        </Box>
      ) : (
        <Button onClick={() => cancel()}>Cancel</Button>
      ) }
    </Spacer>
  )
}
