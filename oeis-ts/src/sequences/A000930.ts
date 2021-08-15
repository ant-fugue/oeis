// TODO Create a function which judges whether the given number is in the sequence
// TODO Generate a sequence of numbers up to the given argument

// use memoization
export const nthA000930Number = (n: number): number => {
  if (!Number.isInteger(n) || n < 0) {
    throw Error('arguments must be a natural number')
  }
  const items: Record<string, number> = {}
  if (items[n]) return items[n]
  if (n <= 2) {
    return 1
  }
  return (items[n] = nthA000930Number(n - 1) + nthA000930Number(n - 3))
}
