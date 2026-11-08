class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const pres = Array.from({length: numCourses}, () => [])

        for (let [crs, pre] of prerequisites) {
            pres[crs].push(pre)
        }

        const visit = new Set()
        const dfs = (crs) => {
            if (visit.has(crs)) {
                return false
            }
            if (pres[crs].length === 0) {
                return true
            }

            visit.add(crs)
            for (let pre of pres[crs]) {
                if (!dfs(pre)) {
                    return false
                }
            }
            visit.delete(crs)
            pres[crs] = []
            return true
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) {
                return false
            }
        }

        return true
    }
}
