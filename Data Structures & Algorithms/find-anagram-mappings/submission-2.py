class Solution:
    def anagramMappings(self, nums1: List[int], nums2: List[int]) -> List[int]:
        res = []
        for i in range(len(nums1)):
            num2Index = nums2.index(nums1[i])
            res.append(num2Index)
        return res