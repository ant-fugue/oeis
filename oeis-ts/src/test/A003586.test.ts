import { isThreeSmoothNum } from '../sequences/A003586'

// TODO test for a judging function
describe('A003586 module test', () => {
  test('isThreeSmoothNum returns true if given number is included in the sequence', () => {
    expect(isThreeSmoothNum(1)).toBe(true)
    expect(isThreeSmoothNum(24)).toBe(true)
    expect(isThreeSmoothNum(128)).toBe(true)
    expect(isThreeSmoothNum(10)).toBe(false)
  })
})

// TODO test for a sequence generation function
// TODO test for integers corresponding to a index of the sequence
