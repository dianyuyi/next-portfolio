import tw, { styled } from 'twin.macro'

import { FillImage } from 'src/components/image'
import { NextLink } from 'src/components/link'

export const Container = styled.div`
  ${tw`container mx-auto grid grid-cols-2 place-content-center md:grid-cols-3 lg:grid-cols-4 md:mt-12 mb-8`}
`
export const ArtLink = styled(NextLink)`
  ${tw`overflow-hidden max-h-[200px] md:max-h-[256px] relative`}
`

export const ArtWrapper = styled.div`
  ${tw`flex flex-col w-full h-full justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 group-active:opacity-100`}
`

export const CoverImg = styled(FillImage)`
  ${tw`max-w-full h-full`}
`

export const Title = styled.p`
  ${tw`text-white p-2`}
`

export const TagsWrapper = styled.div`
  ${tw`border-t border-t-zinc-300 p-2 mt-2`}
`
export const Tag = styled.div`
  ${tw`inline-block p-1 m-1 text-xs text-white border border-zinc-300 rounded-sm`}
`
