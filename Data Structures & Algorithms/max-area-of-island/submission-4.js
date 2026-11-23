class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const ROWS = grid.length
        const COLS = grid[0].length
        let area = 0

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ]

        const bfs = (r, c) => {
            const q = new Queue()
            q.push([r, c])
            grid[r][c] = 0
            let count = 1

            while (!q.isEmpty()) {
                const [row, col] = q.pop()

                for (const [dr, dc] of directions) {
                    const nr = row + dr
                    const nc = col + dc

                    if (
                        nr >= 0 &&
                        nc >= 0 &&
                        nr < ROWS &&
                        nc < COLS &&
                        grid[nr][nc] === 1
                    ) {
                        grid[nr][nc] = 0
                        q.push([nr, nc])
                        count += 1
                    }
                }
            }

            area = Math.max(area, count)
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    bfs(r, c)
                }
            }
        }

        return area
    }
}
