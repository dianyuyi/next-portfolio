import tw, { styled } from 'twin.macro'

import { NextLink } from 'src/components/link'

type StyleProps = {
  color?: string
}

export const MediaContainer = styled.div(({ color }: StyleProps) => [
  tw`flex pb-8`,
  color === 'white' ? tw`justify-center mt-2 pb-2` : tw`justify-start ml-[10%]`,
])

export const MediaList = styled.div`
  ${tw`flex`}
`

export const MediaItem = styled.div`
  ${tw`text-2xl mr-2`}
`

export const IconLink = styled(NextLink)(({ color }: StyleProps) => [
  tw`duration-300 hover:opacity-70`,
  color === 'white' ? tw`text-white text-xl` : tw`text-[#222] text-2xl`,
])
