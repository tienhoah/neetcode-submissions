class Solution:
    def scoreOfString(self, s: str) -> int:
        sum = 0

        for i in range(len(s) - 1):
            countC = abs(ord(s[i]) - ord(s[i + 1]))
            sum+=countC

        return sum