import tw, { styled } from 'twin.macro'
import { motion } from 'framer-motion'
import { NextLink } from 'src/components/link'

export const SideContainer = styled(motion.nav)`
  ${tw`block fixed top-0 right-0 bottom-0 w-screen pointer-events-none z-[9999] md:hidden`}
`

export const ToggleButton = styled.button`
  ${tw`outline-none border-none	select-none	absolute cursor-pointer rounded-full bg-transparent	pointer-events-auto top-3.5 right-[calc(10vw - 36px)] w-[48px] h-[48px]`}
`

export const MotionBg = styled(motion.div)`
  ${tw`absolute top-0 right-0 bottom-0 w-full bg-white  backdrop-saturate-200`}
`

export const MotionListWrapper = styled(motion.ul)`
  ${tw`absolute flex flex-col justify-center items-center w-full py-6 mt-[10%] min-h-[100px]`}

  &.preventClick {
    ${tw`pointer-events-none`}

    > li > a {
      ${tw`pointer-events-none`}
    }

    > li > button {
      ${tw`pointer-events-none`}
    }
  }
`

export const ListItem = styled(motion.li)`
  ${tw`p-2`}
`

export const ItemLink = styled(NextLink)`
  ${tw`no-underline py-0 px-2 text-lg font-light cursor-pointer text-zinc-900`}
  pointer-events: fill;
`

export const LanguageWrapper = styled.div`
  ${tw`flex items-center justify-center my-4`}

  &.preventClick {
    ${tw`pointer-events-none`}

    > li > button {
      ${tw`pointer-events-none`}
    }
  }
`

export const LanguageButton = styled.button`
  pointer-events: fill;
  ${tw`px-2 pb-1 duration-500 text-sm font-light text-zinc-900 `}

  &.active {
    ${tw`pb-0 border-b-2 border-b-zinc-900`}
  }
`
