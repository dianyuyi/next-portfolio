/**
 * @jest-environment jsdom
 */

import { renderHook } from '@testing-library/react-hooks'
import { cleanup } from '@testing-library/react'
import 'jest-styled-components'
import '@testing-library/jest-dom'

import { useBreakpoints } from 'src/hook'

afterEach(cleanup)

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

test('hook', () => {
  const { result } = renderHook(() => useBreakpoints())
  expect(result).toStrictEqual({
    all: [
      { isUpLg: null, isUpMd: null, isUpSm: null, isUpXl: null, isUpXxl: null },
      { isUpLg: false, isUpMd: false, isUpSm: false, isUpXl: false, isUpXxl: false },
    ],
    current: { isUpLg: false, isUpMd: false, isUpSm: false, isUpXl: false, isUpXxl: false },
    error: undefined,
  })
})
