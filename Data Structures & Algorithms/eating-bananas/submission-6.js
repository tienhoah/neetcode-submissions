class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 0
        let r = Math.max(...piles)
        let res = r

        while (l <= r) {
            const k = Math.floor((r + l) / 2)
            let totalHours = 0
            for (const p of piles) {
                totalHours += Math.ceil(p / k)
            } 

            if (totalHours <= h) {
                res = k
                r = k - 1
            } else {
                l = k + 1
            }
        }

        return res
    }
}
