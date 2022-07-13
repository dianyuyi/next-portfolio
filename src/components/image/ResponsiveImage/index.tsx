import React from 'react'
import Image from 'next/image'
import { Box } from './styled'

export const ResponsiveImage = ({
  alt,
  src,
  width,
  height,
  objectFit = 'none',
  quality = 75,
  ...restProps
}: ImageGlobal.ResponsiveProps): JSX.Element => {
  return (
    <Box>
      <Image
        layout="responsive"
        alt={alt}
        src={src}
        width={width}
        height={height}
        objectFit={objectFit}
        quality={quality}
        {...restProps}
      ></Image>
    </Box>
  )
}
