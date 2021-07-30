import { isSquareFree } from '../sequences/A005117'

describe('A005117 module test', () => {
  test('isSquareFree() returns true if the given argument is not divisible by a square greater than 1', () => {
    expect(isSquareFree(1)).toBe(true)
    expect(isSquareFree(10)).toBe(true)
    expect(isSquareFree(113)).toBe(true)
    expect(isSquareFree(8)).toBe(false)
    expect(isSquareFree(9)).toBe(false)
  })
})
