import React from 'react'
import Link from 'next/link'

import { isExternalLink } from 'src/utils/url'

interface Props {
  href?: string
  children?: React.ReactNode
  target?: string
  onClick?: () => void
  className?: string
}

export const NextLink = ({
  href,
  target = '',
  children,
  onClick,
  className = '',
  ...restProps
}: Props) => {
  const isExternal = isExternalLink(href)
  const rel = isExternal ? 'noreferrer noopener' : ''

  return (
    <Link href={href} {...restProps} passHref>
      <a target={target} className={className} onClick={onClick} rel={rel}>
        {children}
      </a>
    </Link>
  )
}
