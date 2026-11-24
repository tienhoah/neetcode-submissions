class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length
        const COLS = grid[0].length
        const q = new Queue()
        const directions = [[1,0],[-1,0],[0,1],[0,-1]]

        let time = 0
        let fresh = 0

        for (let r = 0; r < ROWS; r++) {
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
            let len = q.size()
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
                        q.push([nr, nc])
                        fresh--
                    }
                }
            }
            time++
        }

        return fresh === 0 ? time : -1
    }
}
