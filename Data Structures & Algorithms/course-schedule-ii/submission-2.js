class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const pres = Array.from({length: numCourses}, () => [])
        for (const [crs, pre] of prerequisites) {
            pres[crs].push(pre)
        }

        const cycle = new Set()
        const visit = new Set()
        const output = []

        const dfs = (crs) => {
            if (cycle.has(crs)) {
                return false
            }

            if (visit.has(crs)) {
                return true
            }

            cycle.add(crs)
            for (let pre of pres[crs]) {
                if (!dfs(pre)) {
                    return false
                }
            }
            cycle.delete(crs)
            pres[crs] = []
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
