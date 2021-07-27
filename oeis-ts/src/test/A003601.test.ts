import { isA003601 } from '../sequences/A003601'

describe('isA003601', () => {
  it('returns true if the average of the divisors of n is an integer', () => {
    expect(isA003601(1)).toBe(true)
    expect(isA003601(5)).toBe(true)
    expect(isA003601(30)).toBe(true)
    expect(isA003601(4)).toBe(false)
  })
})

// TODO test for a sequence generation function
// TODO test for integers corresponding to a index of the sequence
