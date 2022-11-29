import tw, { styled } from 'twin.macro'
import { NextLink } from 'src/components/link'

export const IntroName = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
`
export const IntroDate = styled.p`
  ${tw`text-sm text-gray-700 px-0 py-2 mt-2`}
`
export const IntroDescription = styled.p`
  ${tw`text-base py-3 font-semibold leading-5`}
`
export const IntroTagBox = styled.div`
  ${tw`py-3 mb-4 border-x-0 border-y border-y-zinc-300`}
`

export const IntroTag = styled.div`
  ${tw`inline-block py-1 px-2 mr-2 text-sm text-zinc-300 border border-zinc-300`}
`

export const Block = styled.div`
  ${tw`mb-3`}
`

export const ListBox = styled.div`
  ${tw`flex justify-start items-start mb-1 text-xs text-zinc-700`}
`

export const IconWrapper = styled.div`
  ${tw`basis-6	pr-2`}
`

export const IntroLink = styled.div`
  ${tw`flex items-center my-4`}

  > a {
    ${tw`flex items-center text-2xl text-zinc-300`}

    span {
      ${tw`pl-2 text-sm text-zinc-300`}
    }
  }
`

export const BackList = styled(NextLink)`
  ${tw`w-full flex relative justify-center items-center border border-zinc-300 py-2 text-xl text-zinc-300 font-black overflow-hidden
  `}
  letter-spacing: 2px;

  a span {
    ${tw`px-2`}
  }

  &:before {
    content: '';
    ${tw`absolute bottom-0 left-0 w-0 h-[4px] duration-300 bg-zinc-400`}
  }

  &:hover {
    &:before {
      ${tw`w-full`}
    }
  }
`
