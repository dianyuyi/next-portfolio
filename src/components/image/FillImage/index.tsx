import React from 'react'
import Image from 'next/image'
import { Box } from './styled'

export const FillImage = ({
  alt,
  src,
  width,
  height,
  quality = 75,
  ...restProps
}: ImageGlobal.Props): JSX.Element => {
  return (
    <Box width={width} height={height}>
      <Image alt={alt} src={src} fill quality={quality} {...restProps}></Image>
    </Box>
  )
}
