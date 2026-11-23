class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length > n - 1) {
            return false
        }
        const adj = Array.from({ length: n}, () => [])
        for (let [n1, n2] of edges)
        {
            adj[n1].push(n2)
            adj[n2].push(n1)
        }

        const visit = new Set()
        const dfs = (node, prev) => {
            if (visit.has(node)) {
                return false
            }

            visit.add(node)
            for (let nei of adj[node]) {
                if (nei === prev) {
                    continue
                }

                if (!dfs(nei, node)) {
                    return false
                }
            }

            return true
        }

        return dfs(0, -1) && n === visit.size
    }
}