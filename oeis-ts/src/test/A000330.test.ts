import { nthA000330Number } from '../sequences/A000330'

describe('nthA000330Number', () => {
  it('returns the n-th A000330 number', () => {
    expect(nthA000330Number(1)).toBe(0)
    expect(nthA000330Number(10)).toBe(285)
  })
})
