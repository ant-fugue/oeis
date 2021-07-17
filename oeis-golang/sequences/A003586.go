package sequences

// IsThreeSmoothNum check whether given number is ..
func IsThreeSmoothNum(num int) bool {
	for num != 1 {
		if (num % 2 == 0) {
			num = num / 2
		} else if (num % 3 == 0) {
			num = num / 3
		} else {
			return false
		}
	}
	return true
}