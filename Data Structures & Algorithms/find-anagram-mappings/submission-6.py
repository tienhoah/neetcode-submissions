class Solution:
    def anagramMappings(self, nums1: List[int], nums2: List[int]) -> List[int]:
        valuesToProps = {}
        for i in range(len(nums2)):
            valuesToProps[nums2[i]] = i

        res = [0] * len(nums1)
        for j in range(len(nums1)):
            res[j] = valuesToProps[nums1[j]]
        return res
