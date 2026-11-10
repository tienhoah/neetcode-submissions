class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {}

        for (let s of strs) {
            const countS = new Array(26).fill(0)
            for (let c of s) {
                countS[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
            }
            const key = countS.join(',')
            if (!res[key]) {
                res[key] = []
            }
            res[key].push(s)
        }
        return Object.values(res)
    }
}
