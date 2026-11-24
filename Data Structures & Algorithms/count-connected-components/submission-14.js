class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let res = n

        const par = Array.from({length: n}, (_, i) => i)
        const rank = Array(n).fill(1)

        const find = (node) => {
            if (par[node] !== node) {
                par[node] = find(par[node])
            }
            return par[node]
        }

        const union = (e1, e2) => {
            let p1 = find(e1)
            let p2 = find(e2)

            if (p1 === p2) {
                return false
            }

            if (rank[p2] > rank[p1]) {
                [p1, p2] = [p2, p1]
            }
            par[p2] = p1
            rank[p1] += rank[p2]
            return true
        }

        for (const [u, v] of edges) {
            if (union(u, v)) {
                res--
            }
        }

        return res
    }
}
