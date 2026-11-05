class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let q = new Queue()
        let fresh = 0
        let time = 0
        let ROWS = grid.length
        let COLS = grid[0].length
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

        for (let r = 0;  r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    fresh++
                }
                if (grid[r][c] === 2) {
                    q.push([r, c])
                }
            }
        }

        while (fresh > 0 && !q.isEmpty()) {
            for (let i = q.size(); i > 0; i--) {
                const [curR, curC] = q.pop()

                for (const [dr, dc] of directions) {
                    const row = curR + dr
                    const col = curC + dc
                    if (
                        row >= 0 &&
                        col >= 0 &&
                        row < ROWS &&
                        col < COLS &&
                        grid[row][col] === 1
                    ) {
                        grid[row][col] = 2
                        q.push([row, col])
                        fresh--
                    }
                }
            }
            time++
        }

        return fresh === 0 ? time : -1
    }
}
