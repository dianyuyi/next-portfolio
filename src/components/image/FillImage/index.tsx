import React from 'react'
import Image from 'next/image'
import { Box } from './styled'

export const FillImage = ({
  alt,
  src,
  width,
  height,
  objectFit = 'none',
  quality = 75,
  ...restProps
}: ImageGlobal.FillProps): JSX.Element => {
  return (
    <Box width={width} height={height}>
      <Image
        alt={alt}
        src={src}
        layout="fill"
        objectFit={objectFit}
        quality={quality}
        {...restProps}
      ></Image>
    </Box>
  )
}
