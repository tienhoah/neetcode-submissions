class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        let par = Array.from({length: edges.length + 1}, (_, i) => i)
        let rank = new Array(edges.length + 1).fill(1)

        function find(x) {
            if (par[x] !== x) {
                par[x] = find(par[x])
            }
            return par[x]
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

        for (let [n1, n2] of edges) {
            if (!union(n1, n2)) {
                return [n1, n2]
            }
        }

        return []
    }
}
