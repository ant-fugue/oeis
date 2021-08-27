import { isA046459Num } from '../sequences/A046459'

// the inclusion judging test
describe('isA046459Num function test', () => {
  it('returns true if the given argument is in the sequence', () => {
    expect(isA046459Num(0)).toBe(true)
    expect(isA046459Num(1)).toBe(true)
    expect(isA046459Num(17)).toBe(true)
    expect(isA046459Num(37)).toBe(false)
  })
})

// TODO the sequence generation test
// TODO the index extraction test
