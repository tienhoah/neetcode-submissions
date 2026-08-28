class Solution:
    def canPermutePalindrome(self, s: str) -> bool:
        char_map = [0] * 128
        count = 0
        for c in s:
            char_map[ord(c)]+=1
        
        for i in char_map:
            if i % 2:
                count+=1
        return count <= 1