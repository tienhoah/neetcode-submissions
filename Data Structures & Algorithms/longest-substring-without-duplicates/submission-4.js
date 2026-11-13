class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charSet = new Set()
        let l = 0,
            r = 0,
            result = 0

        while (r < s.length) {
            while (charSet.has(s[r])) {
                charSet.delete(s[l])
                l++
            }
            charSet.add(s[r])
            result = Math.max(result, r - l + 1)
            r++
        }

        return result
    }
}
