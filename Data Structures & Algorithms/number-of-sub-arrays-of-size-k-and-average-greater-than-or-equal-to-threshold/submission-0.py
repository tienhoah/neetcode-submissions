class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        L = 0
        output = 0
        total = 0

        for R in range(len(arr)):
            total += arr[R]
            if R - L + 1 == k:
                if total >= k * threshold:
                    output += 1
                total -= arr[L]
                L += 1
        return output