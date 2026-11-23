class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length
        const COLS = heights[0].length
        const directions = [[1,0], [-1,0], [0,1], [0,-1]]

        const dfs = (r, c, ocean) => {
            ocean.add(`${r},${c}`)

            for (const [dr, dc] of directions) {
                const nr = r + dr
                const nc = c + dc

                if (
                    nr >= 0 &&
                    nc >= 0 &&
                    nr < ROWS &&
                    nc < COLS &&
                    !ocean.has(`${nr},${nc}`) &&
                    heights[nr][nc] >= heights[r][c]
                ) {
                    dfs(nr, nc, ocean)
                }
            }
        }

        const pac = new Set()
        const atl = new Set()

        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0, pac)
            dfs(r, COLS - 1, atl)
        }

        for (let c = 0; c < COLS; c++) {
            dfs(0, c, pac)
            dfs(ROWS - 1, c, atl)
        }

        const res = []
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pac.has(`${r},${c}`) && atl.has(`${r},${c}`)) {
                    res.push([r, c])
                }
            }
        }

        return res
    }
}
