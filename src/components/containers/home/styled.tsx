import tw, { styled } from 'twin.macro'

export const MainBg = styled.div`
  ${tw`w-full p-0  bg-home-bg  bg-center bg-fixed	overflow-hidden`}
  height: calc(100vh - 52px);
`

export const HeroContainer = styled.div`
  ${tw`flex justify-center items-center h-screen relative mt-0`}
`

export const HeroBg = styled.div`
  ${tw`absolute top-0 bottom-0 right-0 left-0 w-full h-full `}
`

export const HeroContent = styled.div`
  ${tw`container mx-auto flex flex-col justify-center items-center h-screen p-0 font-bold text-white z-10`}
`

export const HeroH1 = styled.h1`
  ${tw`w-full text-6xl mb-2 pl-8 font-medium text-white`}
  text-shadow: 4px 4px 10px rgba(0 0 0 / 50%), 4px 1px 5px rgba(0 0 0 / 50%), 4px 1px 5px rgba(0 0 0 / 50%);
`
