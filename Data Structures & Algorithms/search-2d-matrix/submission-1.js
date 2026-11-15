class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROWS = matrix.length,
            COLS = matrix[0].length

        let l = 0,
            r = ROWS * COLS - 1
        
        while (l <= r) {
            const m = l + Math.floor((r - l) / 2)
            const row = Math.floor(m / COLS)
            const col = Math.floor(m % COLS)

            if (target < matrix[row][col]) {
                r = m - 1
            } else if (target > matrix[row][col]) {
                l = m + 1
            } else {
                return true
            }
        }

        return false
    }
}
