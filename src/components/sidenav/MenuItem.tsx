import * as React from 'react'
import { SideNavListItem, SideNavLink } from './styled'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

interface Props {
  toggle?: () => void
}

export const MenuItem = ({ toggle }: Props) => {
  return (
    <>
      <SideNavListItem
        onClick={toggle}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <SideNavLink href="/">Home</SideNavLink>
      </SideNavListItem>
      <SideNavListItem
        onClick={toggle}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <SideNavLink href="/menu">Menu</SideNavLink>
      </SideNavListItem>
      <SideNavListItem
        onClick={toggle}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <SideNavLink href="/product">Product</SideNavLink>
      </SideNavListItem>
    </>
  )
}
