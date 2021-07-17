package sequences

// NumList return number list
func NumList(min int, max int) []int{
	var arr []int
	for i := min; i < max + 1; i++ {
		arr = append(arr, i)
	}
	return arr
}