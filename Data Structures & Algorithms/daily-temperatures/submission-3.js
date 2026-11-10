class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0)
        const stack = []

        for (let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i]
            while (stack.length > 0 && t > stack[stack.length - 1][1]) {
                const [stackI, stackT] = stack.pop()
                res[stackI] = i - stackI
            }
            stack.push([i, t])
        }
        return res
    }
}
