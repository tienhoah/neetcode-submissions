class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let ROWS = heights.length
        let COLS = heights[0].length
        let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

        let pac = new Set()
        let atl = new Set()

        const dfs = (r, c, ocean) => {
            ocean.add(r + ',' + c)

            for (let [dr, dc] of directions) {
                let nr = dr + r
                let nc = dc + c
                if (
                    nr >= 0 &&
                    nc >= 0 &&
                    nr < ROWS &&
                    nc < COLS &&
                    !ocean.has(nr + ',' + nc) &&
                    heights[nr][nc] >= heights[r][c]
                ) {
                    dfs(nr, nc, ocean)
                }
            }
        }

        for (let c = 0; c < COLS; c++) {
            dfs(0, c, pac)
            dfs(ROWS - 1, c, atl)
        }

        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0, pac)
            dfs(r, COLS - 1, atl)
        }

        let res = []
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pac.has(r + ',' + c) && atl.has(r + ',' +c)) {
                    res.push([r, c])
                }
            }
        }

        return res
    }
}
 