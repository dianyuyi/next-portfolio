import React from 'react'
import Image from 'next/image'
import { Box } from './styled'

export const ResponsiveImage = ({
  alt,
  src,
  width,
  height,
  quality = 75,
  ...restProps
}: ImageGlobal.ResponsiveProps): JSX.Element => {
  return (
    // <Box>
    <Image
      alt={alt}
      width={width}
      height={height}
      src={src}
      quality={quality}
      sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      {...restProps}
    ></Image>
    // </Box>
  )
}
