import React from 'react'
import Image from 'next/image'
import { Box } from './styled'

export const ResponsiveImage = ({
  alt,
  src,
  quality = 75,
  ...restProps
}: ImageGlobal.Props): JSX.Element => {
  return (
    <Box>
      <Image fill alt={alt} src={src} quality={quality} {...restProps}></Image>
    </Box>
  )
}
