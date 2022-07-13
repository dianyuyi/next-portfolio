import * as React from 'react'
import { SideNavList } from './styled'
import { MenuItem } from './MenuItem'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

interface Props {
  toggle?: () => void
  isSideOpen?: boolean
}

export const Navigation = ({ isSideOpen, toggle }: Props) => (
  <SideNavList variants={variants} className={`${isSideOpen ? '' : 'preventClick'}`}>
    <MenuItem toggle={toggle} />
  </SideNavList>
)
