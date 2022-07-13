import { isExternalLink } from '../url'

test('isExternalLink', () => {
  expect(isExternalLink('/user')).toBeFalsy()
  expect(isExternalLink('user')).toBeFalsy()
  expect(isExternalLink('https://github.com/dianyuyi')).toBeTruthy()
  expect(isExternalLink('http://github.com/dianyuyi')).toBeTruthy()
  expect(isExternalLink('//github.com/dianyuyi')).toBeTruthy()
})
