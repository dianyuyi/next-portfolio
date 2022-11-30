import tw, { styled } from 'twin.macro'

export const MainTitleContainer = styled.div`
  ${tw`w-full inline-flex relative justify-center items-center mb-8 md:hidden`}
`

export const MainTitle = styled.h1`
  ${tw`relative my-16 text-4xl`}

  &:after {
    content: '';
    ${tw`absolute top-full left-2/3 w-[100px] h-px bg-zinc-300 rotate-[135deg]`}
  }
`

export const TitleBg = styled.div`
  ${tw`bg-no-repeat bg-contain bg-center bg-bottom absolute w-[200px] h-full bg-button-bg opacity-50`}
`
