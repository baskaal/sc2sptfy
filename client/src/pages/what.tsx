import { useEffect, useState } from 'react'
import Image from 'next/image';
import useAxios from 'axios-hooks';
import { useLocalStorage } from 'usehooks-ts';
import useApi from '@/hooks/useApi'
import { Spacer, Text, Box, Button, Checkbox } from '@/components'

export default function What() {
  const { generate } = useApi()
  const [selectedUser] = useLocalStorage<any>('selectedUser', null);
  const [selection, setSelection] = useState<any>({
    tracks: false,
    likes: false,
    playlists: {}
  });

  let [{ data: userDetail }, getUserDetail] = useAxios<any>(
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}/user/${selectedUser?.id}/collect`,
      method: 'GET',
    },
    { manual: true }
  )

  useEffect(() => {
    getUserDetail()
  }, [])

  const toggle = (key: string, playlistId?: number) => {
    if (playlistId) {
      setSelection({
        ...selection,
        playlists: {
          ...selection.playlists,
          [playlistId]: !selection.playlists[playlistId]
        }
      })
    } else {
      setSelection({ ...selection, [key]: !selection[key] })
    }
  }

  const someSelected = selection.tracks || selection.likes || Object.values(selection.playlists).some((value) => value);

  return (
    <Spacer size="m" css={{ pt: 'xl', justifyContent: 'space-between' }}>
      <Box css={{ overflowY: 'auto' }}>
        <Spacer size="m" css={{ justifyContent: 'center', width: '100%' }}>

          { !!userDetail?.tracks.length && (
            <label>
              <Spacer
                css={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  border: 'thick',
                  borderColor: 'primary',
                  borderRadius: 'm',
                  px: 'm',
                  cursor: 'pointer'
                }}
              >
                <Checkbox onChange={() => toggle(`tracks`)} />
                <Box df fww css={{ flexBasis: '50%', maxWidth: '80px' }}>
                  { userDetail?.tracks.slice(0, 4).map(({ title, artwork_url }: any, trackIndex: number) => (
                    <Box df css={{ overflow: 'hidden' }} key={trackIndex}>
                      <Image
                        src={artwork_url || ''}
                        width={40}
                        height={40}
                        alt={`${title.toLowerCase()}-avatar`}
                      />
                    </Box>
                  )) }
                </Box>
                <Spacer size="xs" css={{ width: 'auto', flexDirection: 'row' }}>
                  <Text>Tracks</Text>
                  <Text css={{ color: 'greys.60' }}>({ userDetail?.tracks.length })</Text>
                </Spacer>
              </Spacer>
            </label>
          )}

          { !!userDetail?.likes.length && (
            <label>
              <Spacer
                css={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  border: 'thick',
                  borderColor: 'primary',
                  borderRadius: 'm',
                  px: 'm',
                  cursor: 'pointer'
                }}
              >
                <Checkbox onChange={() => toggle(`likes`)} />
                <Box df fww css={{ flexBasis: '50%', maxWidth: '80px' }}>
                  { userDetail?.likes.slice(0, 4).map(({ title, artwork_url }: any, trackIndex: number) => (
                    <Box df css={{ overflow: 'hidden' }} key={trackIndex}>
                      <Image
                        src={artwork_url || ''}
                        width={40}
                        height={40}
                        alt={`${title.toLowerCase()}-avatar`}
                      />
                    </Box>
                  )) }
                </Box>
                <Spacer size="xs" css={{ width: 'auto', flexDirection: 'row' }}>
                  <Text>Likes</Text>
                  <Text css={{ color: 'greys.60' }}>({ userDetail?.likes.length })</Text>
                </Spacer>
              </Spacer>
            </label>
          )}

          { !!userDetail?.playlists.length && userDetail?.playlists.map(({ id, title, tracks }: any, playlistIndex: number) => (
            <label key={playlistIndex}>
              <Spacer
                css={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  border: 'thick',
                  borderColor: 'primary',
                  borderRadius: 'm',
                  px: 'm',
                  cursor: 'pointer'
                }}
              >
                <Checkbox onChange={() => toggle('playlists', id)} />
                <Box df fww css={{ flexBasis: '50%', maxWidth: '80px' }}>
                  { tracks.slice(0, 4).map(({ title, artwork_url }: any, trackIndex: number) => (
                    <Box df css={{ overflow: 'hidden' }} key={trackIndex}>
                      <Image
                        src={artwork_url || ''}
                        width={40}
                        height={40}
                        alt={`${title.toLowerCase()}-avatar`}
                      />
                    </Box>
                  )) }
                </Box>
                <Spacer size="xs" css={{ width: 'auto', flexDirection: 'row' }}>
                  <Text>{ title }</Text>
                  <Text css={{ color: 'greys.60' }}>({ tracks.length })</Text>
                </Spacer>
              </Spacer>
            </label>
          )) }


        </Spacer>
      </Box>

      <Button css={{ visibility: !someSelected && 'hidden' }} onClick={() => generate(selectedUser, selection)}>Generate</Button>
    </Spacer>
  )
}
