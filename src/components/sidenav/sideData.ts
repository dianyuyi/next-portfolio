const sideData: Nav.Side = {
  sideBar: {
    open: (height = 800) => ({
      clipPath: `circle(${height * 2 + 200}px at 90vw 36px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(24px at 90vw 36px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  },
  navigation: {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  },
  menuToggle: [
    {
      d: '',
      transition: {},
      variants: {
        closed: { d: 'M 2 2.5 L 20 2.5' },
        open: { d: 'M 3 16.5 L 17 2.5' },
      },
    },
    {
      d: 'M 2 9.423 L 20 9.423',
      transition: { duration: 0.1 },
      variants: {
        closed: { opacity: 1 },
        open: { opacity: 0 },
      },
    },
    {
      d: '',
      transition: {},
      variants: {
        closed: { d: 'M 2 16.346 L 20 16.346' },
        open: { d: 'M 3 2.5 L 17 16.346' },
      },
    },
  ],
  menuItem: {
    variants: {
      open: {
        y: 0,
        opacity: 1,
        transition: {
          y: { stiffness: 100, velocity: -30 },
        },
      },
      closed: {
        y: 10,
        opacity: 0,
        transition: {
          y: { stiffness: 200 },
        },
      },
    },
    menu: {
      links: [
        { name: 'home', href: '/' },
        { name: 'about', href: '/about' },
        { name: 'work_projects', href: '/workProjects' },
        { name: 'side_projects', href: '/sideProjects' },
        { name: 'arts', href: '/arts' },
      ],
      languages: [
        { name: 'TW', code: 'zh_tw' },
        { name: 'EN', code: 'en_us' },
        { name: 'JP', code: 'ja' },
      ],
    },
  },
}

export default sideData
