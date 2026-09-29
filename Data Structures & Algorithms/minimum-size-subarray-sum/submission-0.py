class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        l = r = 0
        sum = 0
        minLength = float('inf')

        while l < len(nums):
            if sum >= target:
                length = r - l
                minLength = min(minLength, length)
                sum -= nums[l]
                l += 1
            elif r < len(nums):
                sum += nums[r]
                r += 1
            else:
                break

        return minLength if minLength != float('inf') else 0