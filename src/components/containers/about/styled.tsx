import tw, { styled } from 'twin.macro'

export const AboutContainer = styled.div`
  ${tw`w-full h-full container flex flex-col mx-auto mt-12 pb-16 md:pb-4 lg:pb-0`}
`

export const CircleClip = styled.div`
  ${tw`rounded-full mx-auto overflow-hidden top-0 duration-300 z-10 `}
`

export const IntroContext = styled.div`
  ${tw`mx-0 p-4 bg-zinc-600 md:mx-8`}
`

export const IntroInner = styled.div`
  ${tw`-mt-10 ml-2 px-6 py-4 bg-white border border-zinc-600 duration-300 md:px-10 md:px-8`}
`

export const Text = styled.p`
  ${tw`text-sm leading-6 py-2 md:text-lg md:py-4`}
`

export const ResumeBar = styled.div`
  ${tw`w-auto flex justify-end mt-4 mx-auto pb-12 md:pb-4 md:mt-8 md:mr-5`}
`

export const ResumeBtn = styled.button`
  ${tw`border border-zinc-600 text-black text-sm lg:text-base p-3 m-2 duration-300 hover:translate-x-1	hover:translate-y-1`}
  box-shadow: inset -2px -2px 0 rgb(0 0 0 / 100%);

  &:hover {
    box-shadow: inset 2px 2px 1px rgb(0 0 0 / 50%);
  }
`
