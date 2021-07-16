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
}

export default QJS
