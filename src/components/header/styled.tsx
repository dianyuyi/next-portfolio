import tw, { styled } from 'twin.macro'

import { NextLink } from 'src/components/link'

export const Container = styled.div`
  ${tw`container mx-auto px-3`}
`

export const StyledHeader = styled.div`
  ${tw`hidden top-0 z-[40] bg-white py-2 md:pt-4 md:block md:sticky`}
`

export const HeaderContainer = styled(Container)`
  ${tw`flex justify-between`}
`

export const ContentBox = styled.div`
  ${tw`flex items-center gap-3`}
`

export const LogoContentBox = styled(ContentBox)`
  ${tw`md:gap-[25px]`}
`

export const LogoWrapper = styled.div`
  ${tw`flex items-center`}
`

export const LinkItem = styled.div`
  ${tw`md:text-xs lg:text-sm px-2`}
`

export const SelectWrapper = styled.div`
  ${tw`flex relative items-center bg-black border-zinc-300 rounded-md`}
`
export const LanguageSelect = styled.select`
  ${tw`appearance-none select-none relative border pl-2 pr-6 py-1 text-white bg-transparent border-0 md:text-xs lg:text-sm`}
`
export const IconWrapper = styled.div`
  ${tw`absolute right-1.5 pointer-events-none text-xs`}
`
