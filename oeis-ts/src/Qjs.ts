class QJS {
  static iota(min: number, max: number): number[] {
    const arr = []
    for (let i = min; i < max + 1; i++) {
      arr.push(i)
    }
    return arr
  }
  static divOf(num: number): number[] {
    const arr = []
    for (let i = 1; i < num + 1; i++) {
      if (num % i === 0) {
        arr.push(i)
      }
    }
    return arr
  }

  static divSum(num: number): number {
    const divisors = []
    for (let i = 1; i < num + 1; i++) {
      if (num % i === 0) divisors.push(i)
    }
    return divisors.reduce((a, c) => a + c)
  }

  static primeFactor(num: number): Record<string, number> {
    const obj: Record<string, number> = {}
    let divisor = 2

    while (num >= 2) {
      if (num % divisor === 0) {
        if (obj[divisor] === undefined) {
          obj[divisor] = 1
        } else {
          obj[divisor] += 1
        }
        num = num / divisor
      } else {
        divisor++
      }
    }
    return obj
  }
  static getQuotient(num: number, divisor: number): number {
    if (!Number.isInteger(num) || !Number.isInteger(divisor)) {
      throw Error('the argument must be integers')
    }
    if (divisor === 0) {
      throw Error('division by 0')
    }
    return Math.floor(num / divisor)
  }

  static getIntArrayFromInt(num: number): number[] {
    if (!Number.isInteger(num)) {
      throw Error('the argument must be integers')
    }
    return num
      .toString()
      .split('')
      .map((elem) => parseInt(elem))
  }
}

export default QJS
