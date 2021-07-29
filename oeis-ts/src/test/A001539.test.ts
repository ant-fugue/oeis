import { generateA001539Num } from '../sequences/A001539'

describe('A001539 functions test', () => {
  test('generateA001539Num() returns the number of the given index from the sequence', () => {
    expect(generateA001539Num(0)).toBe(3)
    expect(generateA001539Num(2)).toBe(99)
  })
})
