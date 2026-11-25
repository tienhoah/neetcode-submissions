class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums)
        let longest = 0

        for (const num of numSet) {
            const prev = num - 1
            if (!numSet.has(prev)) {
                let length = 1
                while (numSet.has(num + length)) {
                    length++
                }
                longest = Math.max(longest, length)
            }
        }

        return longest
    }
}