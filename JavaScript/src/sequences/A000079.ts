export const isA000079 = (num: number): boolean => {
  if (num === 0) {
    return false
  }
  while (num > 1) {
    if (num % 2 !== 0) {
      return false
    }
    num = num / 2
  }
  return true
}

// TODO Generate a sequence of numbers up to the given argument
// TODO generate integers corresponding to a sequence of numbers.
