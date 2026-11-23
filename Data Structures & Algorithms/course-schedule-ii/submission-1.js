class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const preMap = Array.from({length: numCourses}, () => [])
        for (let [crs, pre] of prerequisites) {
            preMap[crs].push(pre)
        }

        const visit = new Set()
        const cycle = new Set()
        const output = []

        const dfs = (crs) => {
            if (cycle.has(crs)) {
                return false
            }

            if (visit.has(crs)) {
                return true
            }

            cycle.add(crs)
            for (let pre of preMap[crs]) {
                if (!dfs(pre)) {
                    return false
                }
            }
            cycle.delete(crs)
            visit.add(crs)
            output.push(crs)
            return true
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) {
                return []
            }
        }

        return output
    }
}
