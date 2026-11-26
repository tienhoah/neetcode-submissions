class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }
        const s1Count = {}
        const s2Count = {}

        for (let i = 0; i < s.length; i++) {
            s1Count[s[i]] = (s1Count[s[i]] || 0) + 1
            s2Count[t[i]] = (s2Count[t[i]] || 0) + 1
        }

        for (const key in s1Count) {
            if (s1Count[key] !== s2Count[key]) {
                return false
            }
        }

        return true
    }
}
