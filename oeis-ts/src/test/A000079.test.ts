import { isA000079 } from '../sequences/A000079'

// the inclusion judging test
describe('isA000079', () => {
  it('returns true if the given argument is a powers of two', () => {
    expect(isA000079(0)).toBe(false)
    expect(isA000079(1)).toBe(true)
    expect(isA000079(8)).toBe(true)
    expect(isA000079(2048)).toBe(true)
    expect(isA000079(10)).toBe(false)
  })
})

// TODO the sequence generation test
// TODO the index extraction test
