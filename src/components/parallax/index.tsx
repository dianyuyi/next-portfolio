import React, { useState, useRef, useLayoutEffect, useEffect, ReactNode } from 'react'
import { motion, useViewportScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion'

// https://samuelkraft.com/blog/spring-parallax-framer-motion-guide
type ParallaxProps = {
  children: ReactNode
  offset?: number
  clampInitial?: boolean
  clampFinal?: boolean
}

const Parallax = ({
  children,
  offset = 50,
  clampInitial,
  clampFinal,
}: ParallaxProps): JSX.Element => {
  const prefersReducedMotion = useReducedMotion()
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const ref = useRef(null)

  const { scrollY } = useViewportScroll()

  // start animating our element when we've scrolled it into view
  const initial = elementTop - clientHeight
  // end our animation when we've scrolled the offset specified
  const final = elementTop + offset

  const yRange = useTransform(
    scrollY,
    [initial, final],
    [clampInitial ? 0 : offset, clampFinal ? 0 : -offset]
  )
  // apply a spring to ease the result
  const y = useSpring(yRange, { stiffness: 400, damping: 90 })

  useEffect(() => {
    const element = ref.current
    // save our layout measurements in a function in order to trigger
    // it both on mount and on resize
    const onResize = () => {
      // use getBoundingClientRect instead of offsetTop in order to
      // get the offset relative to the viewport
      setElementTop(element.getBoundingClientRect().top + window.scrollY || window.pageYOffset)
      setClientHeight(window.innerHeight)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [ref])

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <>{children}</>
  }

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  )
}

export default Parallax
