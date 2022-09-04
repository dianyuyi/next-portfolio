import tw, { styled } from 'twin.macro'
import { NextLink } from 'src/components/link'

export const IntroName = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
`
export const IntroDate = styled.p`
  ${tw`text-sm text-gray-700 px-0 py-2 mt-2`}
`
export const IntroDescription = styled.p`
  ${tw`text-medium py-6 font-sm leading-5`}
`
export const IntroTagBox = styled.div`
  ${tw`py-3 mb-4 border border-t-[#ccc] border-b-[#ccc]`}
`

export const IntroTag = styled.div`
  ${tw`inline-block py-1 px-2 mr-2 text-xs text-[#ccc] border border-[#ccc]`}
`

export const IntroLink = styled.div`
  ${tw`flex items-center mb-4`}

  > a {
    ${tw`flex items-center text-2xl text-[#ccc]`}

    span {
      ${tw`pl-2 text-sm text-[#ccc]`}
    }
  }
`

export const BackList = styled(NextLink)`
  ${tw`w-full flex relative justify-center border border-[#ccc] py-2 text-xl text-[#ccc] font-black overflow-hidden
  `}
  letter-spacing: 2px;

  a span {
    ${tw`px-2`}
  }

  &:before {
    content: '';
    ${tw`absolute bottom-0 left-0 w-0 h-[4px] duration-300	 bg-[#4d4d4d]`}
  }

  &:hover {
    &:before {
      ${tw`w-full`}
    }
  }
`
