import tw, { styled } from 'twin.macro'

import { NextLink } from 'src/components/link'

export const ErrorContainer = styled.div`
  ${tw`w-full h-full relative inline-flex flex-col container mx-auto mb-4`}
`

export const ErrorTitle = styled.h1`
  ${tw`my-8 mx-auto text-lg`}
`

export const ErrorImgWrapper = styled.div`
  ${tw`w-full flex justify-center px-2`}
`

export const ErrorBackLink = styled(NextLink)`
  ${tw`mx-auto my-2 p-2 rounded-sm border border-zinc-300 text-black shadow-sm duration-300 hover:bg-zinc-900 hover:text-white hover:translate-x-1 hover:translate-y-2 hover:shadow-md`}
`
