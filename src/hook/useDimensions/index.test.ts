/**
 * @jest-environment jsdom
 */

import { renderHook } from '@testing-library/react'
import { useDimensions } from './index'

it('useDimensions ref', () => {
  const element = document.createElement('div')
  const ref = { current: element }
  const { result } = renderHook(() => useDimensions(ref))
  expect(ref.current.offsetWidth).toEqual(0)
  expect(result.current).toEqual({ width: 0, height: 0 })
})
