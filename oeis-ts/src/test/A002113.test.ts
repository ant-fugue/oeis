import { isA002113 } from '../sequences/A002113'

describe('isA002113', () => {
  it('returns true if the given argument is a palindrome', () => {
    expect(isA002113(5)).toBe(true)
    expect(isA002113(11)).toBe(true)
    expect(isA002113(1221)).toBe(true)
    expect(isA002113(123474321)).toBe(true)
    expect(isA002113(121)).toBe(true)
    expect(isA002113(1243)).toBe(false)
  })
})
