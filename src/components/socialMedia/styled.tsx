import tw, { styled } from 'twin.macro'

import { NextLink } from 'src/components/link'

type StyleProps = {
  iconColor?: string
}

export const MediaContainer = styled.div(({ iconColor }: StyleProps) => [
  tw`flex pb-8`,
  iconColor === 'white' ? tw`justify-center mt-2 pb-2` : tw`justify-start ml-[10%]`,
])

export const MediaList = styled.div`
  ${tw`flex`}
`

export const MediaItem = styled.div`
  ${tw`text-2xl mr-2`}
`

export const IconLink = styled(NextLink)(({ iconColor }: StyleProps) => [
  tw`duration-300 hover:opacity-70`,
  iconColor === 'white' ? tw`text-white text-xl` : tw`text-[#222] text-2xl`,
])
