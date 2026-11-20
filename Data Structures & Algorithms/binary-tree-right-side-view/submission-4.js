/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        const res = []
        if (!root) {
            return res
        }

        const q = new Queue()
        q.push(root)

        while (!q.isEmpty()) {
            let rightSideNode = 0
            let qSize = q.size()

            for (let i = 0; i < qSize; i++) {
                let node = q.pop()

                if (node) {
                    rightSideNode = node.val
                    q.push(node.left)
                    q.push(node.right)
                }
            }

            if (rightSideNode) {
                res.push(rightSideNode)
            }
        }

        return res
    }
}
