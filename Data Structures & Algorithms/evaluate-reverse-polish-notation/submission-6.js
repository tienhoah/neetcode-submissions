class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []

        for (const token of tokens) {
            if (token === '+') {
                stack.push(stack.pop() + stack.pop())
            } else if (token === '*') {
                stack.push(stack.pop() * stack.pop())
            } else if (token === '-') {
                const a = stack.pop()
                const b = stack.pop()
                stack.push(b - a)
            } else if (token === '/') {
                const a = stack.pop()
                const b = stack.pop()
                stack.push(Math.trunc(b / a))
            } else if (token) {
                stack.push(parseInt(token, 10))
            }
        }

        return stack[0]
    }
}
