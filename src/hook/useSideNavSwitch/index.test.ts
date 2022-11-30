/**
 * @jest-environment jsdom
 */

import { renderHook, act } from '@testing-library/react'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import { useSideNavSwitch } from './index'

afterEach(cleanup)

test('Side nav switch', async () => {
  const { result } = renderHook(() => useSideNavSwitch(false))
  expect(result.current.status).toBeFalsy()
  act(() => {
    result.current.handleSideNav()
  })
  expect(result.current.status).toBeTruthy()
  act(() => {
    result.current.handleSideNav()
  })
  expect(result.current.status).toBeFalsy()
})
