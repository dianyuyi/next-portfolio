import tw, { styled } from 'twin.macro'
import { motion } from 'framer-motion'
import { NextLink } from 'src/components/link'

export const SideContainer = styled(motion.nav)`
  ${tw`block fixed top-0 right-0 bottom-0 w-screen z-50 md:hidden`}
  ${({ active }) => active === 'false' && tw`pointer-events-none`}
`

export const ToggleButton = styled.button`
  ${tw`outline-none border-none	select-none	absolute cursor-pointer rounded-full bg-transparent	pointer-events-auto top-3.5 right-[calc(10vw - 36px)] w-[48px] h-[48px]`}
`

export const MotionBg = styled(motion.div)`
  ${tw`absolute top-0 right-0 bottom-0 w-full bg-white  backdrop-saturate-200`}
`

export const MotionListWrapper = styled.ul`
  ${tw`absolute flex flex-col justify-center items-center w-full py-6 mt-12`}
`

export const ListItem = styled.li`
  ${tw`duration-300 hover:scale-110 mx-2 my-4`}
  ${({ active }) =>
    active === 'true' ? tw`border-b-2 border-b-black` : tw`hover:border-b-2 hover:border-b-black`}
`

export const ItemLink = styled(NextLink)`
  ${tw`no-underline py-0 px-2 text-lg font-light cursor-pointer text-zinc-900`}
`

export const LanguageWrapper = styled.div`
  ${tw`flex items-center justify-center mt-12`}
`
export const LanguageItem = styled.li`
  ${tw`mx-2 duration-300`}
  ${({ active }) => active === 'false' && tw`hover:border-b-2 hover:border-b-black`}
`

export const LanguageButton = styled.button`
  ${tw`px-2 pb-1 duration-500 text-sm font-light text-zinc-900 `}
  ${({ active }) => active === 'true' && tw`pb-0.5 border-b-2 border-b-zinc-900`}
`
