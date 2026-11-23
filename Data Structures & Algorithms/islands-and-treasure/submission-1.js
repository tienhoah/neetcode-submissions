class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROWS = grid.length
        const COLS = grid[0].length
        const visit = new Set()
        const q = new Queue()

        const addCell = (r, c) => {
            if (
                Math.min(r, c) < 0 ||
                r === ROWS ||
                c === COLS ||
                visit.has(r + ',' + c) ||
                grid[r][c] === -1
            ) {
                return
            }

            q.push([r, c])
            visit.add(r + ',' + c)
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) {
                    q.push([r, c])
                    visit.add(r + ',' + c)
                }
            }
        }


        let dist = 0
        while (!q.isEmpty()) {
            for (let i = q.size(); i > 0; i--) {
                const [row, col] = q.pop()
                grid[row][col] = dist
                addCell(row + 1, col)
                addCell(row - 1, col)
                addCell(row, col + 1)
                addCell(row, col - 1)
            }
            dist++
        }

    }
}
