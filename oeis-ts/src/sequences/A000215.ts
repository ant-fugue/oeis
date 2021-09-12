// Fermat numbers
// https://oeis.org/A000215

// TODO a function which returns true if the given number is in the sequence
// TODO a function which returns a sequence of numbers up to the given index
// TODO a function which returns an integer corresponding to an index of the sequence
export const genA000215Num = (n: number): number => {
  if (n < 0 || !Number.isInteger(n)) {
    throw Error('the argument must be non-negative integer')
  }
  return 2 ** (2 ** n) + 1
}
