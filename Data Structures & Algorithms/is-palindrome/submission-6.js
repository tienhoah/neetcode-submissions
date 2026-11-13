class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0
        let r = s.length - 1

        while (l < r) {
            if (l < r && !isAlphaNum(s[l])) {
                l++
            } else if (l < r && !isAlphaNum(s[r])) {
                r--
            } else if (s[l].toLowerCase() !== s[r].toLowerCase()){
                return false
            } else {
                l++
                r--
            }

        }

        return true
    }
}

const isAlphaNum = (c) => {
    return (
        c >= 'A' && c <= 'Z' ||
        c >= 'a' && c <= 'z' ||
        c >= '0' && c <= '9'
    )
}
