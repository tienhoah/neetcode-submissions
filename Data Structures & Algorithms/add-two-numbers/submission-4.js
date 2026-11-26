/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode() 
        let cur = dummy
        let carry = 0

        while (l1 || l2 || carry) {
            let v1 = l1 ? l1.val : 0
            let v2 = l2 ? l2.val : 0

            let value = v1 + v2 + carry
            carry = Math.floor(value / 10)
            value = value % 10
            cur.next = new ListNode(value)

            cur = cur.next
            l1 = l1 ? l1.next : null
            l2 = l2 ? l2.next : null
        }

        return dummy.next
    }
}
