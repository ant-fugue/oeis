import { genA000032num } from '../sequences/A000032'

// TODO test for a sequence generation function
describe('genA000032num', () => {
  it('returns the n-th A000032 number', () => {
    expect(genA000032num(0)).toBe(2)
    expect(genA000032num(1)).toBe(1)
    expect(genA000032num(4)).toBe(7)
    expect(genA000032num(10)).toBe(123)
  })
})

// TODO test for a judging function
// TODO test for integers corresponding to a index of the sequence
