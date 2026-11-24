class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROWS = grid.length
        const COLS = grid[0].length
        const q = new Queue()
        const visit = new Set()

        const addRoom = (r, c) => {
            if (
                Math.min(r, c) < 0 ||
                r === ROWS ||
                c === COLS ||
                grid[r][c] === -1 ||
                visit.has(r + ',' + c)
            ) {
                return
            }

            visit.add(r + ',' + c)
            q.push([r, c])
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
                addRoom(row + 1, col)
                addRoom(row - 1, col)
                addRoom(row, col + 1)
                addRoom(row, col - 1)
            }
            dist++
        }
    }
}
