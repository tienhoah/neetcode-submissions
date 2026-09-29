class Solution:
    def validPalindrome(self, s: str) -> bool:
        L, R = 0, len(s) - 1

        while L < R:
            if s[L] != s[R]:
                s1 = s[L + 1:R + 1]
                s2 = s[L:R]
                return s1 == s1[::-1] or s2 == s2[::-1]
            L += 1
            R -= 1

        return True