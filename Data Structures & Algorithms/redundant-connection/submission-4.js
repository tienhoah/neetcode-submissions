class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const par = Array.from({length: edges.length + 1}, (_, i) => i)
        const rank = Array(edges.length + 1).fill(1)

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

        for (let [u, v] of edges) {
            if (!union(u, v)) {
                return [u, v]
            }
        }
        return []
    }
}
