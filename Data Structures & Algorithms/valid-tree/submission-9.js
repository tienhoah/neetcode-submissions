class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length >= n) {
            return false
        }

        const adj = Array.from({length: n}, () => [])
        for (let [u, v] of edges) {
            adj[u].push(v)
            adj[v].push(u)
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

        return dfs(0, -1) && visit.size === n
    }
}
