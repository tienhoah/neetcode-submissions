class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        flag = 0

        for ct in t:
            if (flag == len(s)):
                return True
                
            if flag < len(s) and ct == s[flag]:
                flag += 1

        return flag  == len(s)