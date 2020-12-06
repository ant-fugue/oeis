package sequences

import (
	"testing"
)
func TestThreeSmoothNum(t *testing.T) {
		got := IsThreeSmoothNum(5)
		want := false
		if got != want {
			t.Errorf("result was incorrect")
		}
}
