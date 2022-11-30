import { up } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'

export const useBreakpoints = () => {
  const isUpSm = useBreakpoint(up('sm'))
  const isUpMd = useBreakpoint(up('md'))
  const isUpLg = useBreakpoint(up('lg'))
  const isUpXl = useBreakpoint(up('xl'))
  const isUpXxl = useBreakpoint(up('xxl'))

  return {
    isUpSm,
    isUpMd,
    isUpLg,
    isUpXl,
    isUpXxl,
  }
}
