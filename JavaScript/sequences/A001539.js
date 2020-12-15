const isA = (n) => {
  if (n % ((4 * n + 1) * (4 * n + 3))) return true
  else return false
}

const A001539 = (n) => (4 * n + 1) * (4 * n + 3)

module.exports = A001539
