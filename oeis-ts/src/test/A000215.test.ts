import { genA000215Num } from '../sequences/A000215'

// TODO test for a judging function

// TODO test for a sequence generation function
// TODO test for integers corresponding to a index of the sequence
describe('genA000215Num', () => {
  it('returns the number of the given index', () => {
    expect(genA000215Num(0)).toBe(3)
    expect(genA000215Num(1)).toBe(5)
    expect(genA000215Num(3)).toBe(257)
    expect(genA000215Num(5)).toBe(4294967297)
  })
})
