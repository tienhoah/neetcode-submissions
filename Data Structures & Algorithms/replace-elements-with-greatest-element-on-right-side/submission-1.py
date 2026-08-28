class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        rightMax = -1
        res = [0] * len(arr) 
        res[-1] = -1

        for i in range(len(arr) - 2, -1, -1):
            rightMax = max(rightMax, arr[i + 1])
            res[i] = rightMax
        return res