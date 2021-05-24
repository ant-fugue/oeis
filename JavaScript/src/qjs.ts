class QJS {
  static iota(min: number, max: number): number[] {
    const arr = []
    for (let i = min; i < max + 1; i++) {
      arr.push(i)
    }
    return arr
  }
}

export default QJS
