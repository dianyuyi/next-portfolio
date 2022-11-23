import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'creamfont-2.1', sans-serif;
  }
`
const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
    <Normalize />
  </>
)

export default GlobalStyles
