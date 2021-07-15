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
}

export default QJS
