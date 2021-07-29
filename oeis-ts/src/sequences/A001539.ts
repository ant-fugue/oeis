// TODO Generate a sequence of numbers up to the given argument

// TODO Create a function which judges whether the given number is in the sequence

export const generateA001539Num = (n: number): number => {
  if (!Number.isInteger(n)) {
    throw Error('input should be integer')
  }
  return (4 * n + 1) * (4 * n + 3)
}
