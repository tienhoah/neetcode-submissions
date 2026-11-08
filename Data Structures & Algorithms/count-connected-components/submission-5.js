class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const par = Array.from({length: n}, (_, i) => i)
        const rank = new Array(n).fill(1)
        let res = n

        function find(node) {
            if (par[node] !== node) {
                par[node] = find(par[node])
            }
            return par[node]
        }

        function union(n1, n2) {
            let p1 = find(n1)
            let p2 = find(n2)

            if (p1 === p2) {
                return false
            }

            if (rank[p2] > rank[p1]) {
                [p1, p2] = [p2, p1]
            }
            par[p2] = p1
            rank[p1]++
            return true
        }

        for (const [n1, n2] of edges) {
            if (union(n1, n2)) {
                res--
            }
        }

        return res
        
    }
}
