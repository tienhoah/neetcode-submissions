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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (root === null) {
            return false
        }
        if (subRoot === null) {
            return true
        }
        if (this.sameTree(root, subRoot)) {
            return true
        }
        return (this.isSubtree(root.left, subRoot) ||
                this.isSubtree(root.right, subRoot))
    }

    sameTree(r, s) {
        if (r === null && s === null) {
            return true
        } else if (r && s && r.val === s.val) {
            return (this.sameTree(r.left, s.left) && this.sameTree(r.right, s.right))
        } else {
            return false
        }
    }
}
