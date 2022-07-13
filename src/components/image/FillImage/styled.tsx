import tw, { styled, css } from 'twin.macro'

type BoxProps = {
  width: number | string
  height: number | string
}

export const Box = styled.div(({ width, height }: BoxProps) => [
  tw`relative w-auto h-auto`,
  width &&
    css`
      width: ${width};
    `,
  height &&
    css`
      height: ${height};
    `,
])
