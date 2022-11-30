import tw, { styled } from 'twin.macro'

import { NextLink } from 'src/components/link'

export const MediaContainer = styled.div`
  ${tw`flex pb-8 justify-center mt-2 pb-2`}
`

export const MediaList = styled.div`
  ${tw`flex`}
`

export const MediaItem = styled.div`
  ${tw`text-2xl mr-2`}
`

export const IconLink = styled(NextLink)`
  ${tw`duration-300 hover:opacity-70 text-white text-xl`}
`
