import tw, { styled } from 'twin.macro'

export const MainTitleContainer = styled.div`
  ${tw`w-full inline-flex relative justify-center items-center p-0 md:hidden`}
`

export const MainTitle = styled.h1`
  ${tw`relative `}
`

export const TitleBg = styled.div`
  ${tw`bg-no-repeat bg-contain bg-center bg-bottom absolute w-[200px] h-full bg-button-bg`}
`
