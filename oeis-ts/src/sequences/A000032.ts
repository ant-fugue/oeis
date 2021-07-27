// Lucas numbers
// https://oeis.org/A000032

export const genA000032num = (n: number): number => {
  if (n < 0 || !Number.isInteger(n)) {
    throw Error('the argument must be non-negative integer')
  }

  let fibs: Record<string, number> = {}
  const fib = (n: number): number => {
    if (fibs[n]) return fibs[n]

    if (n === 0) return 2
    if (n === 1) return 1

    return (fibs[n] = fib(n - 1) + fib(n - 2))
  }
  return fib(n)
}
// TODO Create a function which judges whether the given number is in the sequence
// TODO Generate a sequence of numbers up to the given argument
