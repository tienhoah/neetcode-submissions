class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const numLength = nums.length
        const result = new Array(numLength).fill(1)

        for (let i = 1; i < numLength; i++) {
            result[i] = result[i - 1] * nums[i - 1]
        }

        let postFix = 1
        for (let i = numLength - 1; i >= 0; i--) {
            result[i] *= postFix
            postFix *= nums[i]
        }

        return result
    }
}
