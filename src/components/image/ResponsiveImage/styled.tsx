import tw, { css, styled } from 'twin.macro'

type BoxProps = {
  width: number | string
  height: number | string
}

export const Box = styled.div`
  ${tw`block`}
`
