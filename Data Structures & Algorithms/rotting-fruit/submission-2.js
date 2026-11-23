class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length
        const COLS = grid[0].length
        const q = new Queue()
        let time = 0
        let freshness = 0
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ]

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    freshness++
                }

                if (grid[r][c] === 2) {
                    q.push([r, c])
                }
            }
        }

        while (freshness && !q.isEmpty()) {
            const len = q.size()
            for (let i = 0; i < len; i++) {
                const [r, c] = q.pop()
                for (const [dr, dc] of directions) {
                    const nr = r + dr
                    const nc = c + dc

                    if (
                        nr >= 0 &&
                        nc >= 0 &&
                        nr < ROWS &&
                        nc < COLS &&
                        grid[nr][nc] === 1
                    ) {
                        grid[nr][nc] = 2
                        freshness--
                        q.push([nr, nc])
                    }
                }
            }
            time++
        }

        return freshness === 0 ? time : -1
    }
}
