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
}: ImageGlobal.FillProps): JSX.Element => {
  return (
    <Box width={width} height={height}>
      <Image
        alt={alt}
        src={src}
        fill
        quality={quality}
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        style={{
          objectFit: 'cover',
        }}
        {...restProps}
      ></Image>
    </Box>
  )
}
