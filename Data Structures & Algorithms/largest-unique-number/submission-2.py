class Solution:
    def largestUniqueNumber(self, nums: List[int]) -> int:
        hashNumSet = {}
        maxNum = -1

        for num in nums:
            if num not in hashNumSet:
                hashNumSet[num] = 1
            else:
                hashNumSet[num] += 1
            
        for num, count in hashNumSet.items():
            if count == 1 and num > maxNum:
                maxNum = num
        
        return maxNum
