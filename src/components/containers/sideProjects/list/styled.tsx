import tw, { styled } from 'twin.macro'

import { FillImage, ResponsiveImage } from 'src/components/image'
import { NextLink } from 'src/components/link'

export const Container = styled.div`
  ${tw`container mx-auto grid grid-cols-1 place-content-center md:grid-cols-2 lg:grid-cols-3 gap-4 md:mt-12 mb-8`}
`
export const MainLink = styled(NextLink)`
  ${tw`overflow-hidden relative h-full m-4 mb-8`}
`

export const SideWrapper = styled.div`
  ${tw`flex justify-between items-center border-b border-b-zinc-300 duration-300 group-hover:shadow-xl`}
`

export const CoverImg = styled(ResponsiveImage)`
  ${tw`max-w-full h-full`}
`

export const Title = styled.p`
  ${tw`text-black p-2`}
`

export const TagsWrapper = styled.div`
  ${tw`p-2 mt-2`}
`
export const Tag = styled.div`
  ${tw`inline-block p-1 m-1 text-xs text-zinc-400 border border-zinc-300 rounded-sm`}
`
