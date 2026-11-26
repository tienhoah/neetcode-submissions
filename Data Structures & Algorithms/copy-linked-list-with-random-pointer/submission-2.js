// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const mp = new Map()
        mp.set(null, null)

        let cur = head
        while (cur) {
            const copy = new Node(cur.val)
            mp.set(cur, copy)
            cur = cur.next
        }

        cur = head
        while (cur) {
            const copy = mp.get(cur)
            copy.next = mp.get(cur.next)
            copy.random = mp.get(cur.random)
            cur = cur.next
        }

        return mp.get(head)
    }
}
