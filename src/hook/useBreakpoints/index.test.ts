/**
 * @jest-environment jsdom
 */

import { renderHook } from '@testing-library/react'
import { cleanup } from '@testing-library/react'
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

test('breakpoints hook', () => {
  const { result } = renderHook(() => useBreakpoints())
  expect(result).toStrictEqual({
    current: { isUpLg: false, isUpMd: false, isUpSm: false, isUpXl: false, isUpXxl: false },
  })
})
