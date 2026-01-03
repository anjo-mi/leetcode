/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    const head = new ListNode();
    let curr = head;
    while (carry || l1 || l2){
        console.log({carry,l1,l2})
        const total = (l1?.val || 0) + (l2?.val || 0) + (carry || 0);
        curr.val = (total % 10);
        carry = Math.floor(total / 10);
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        if (carry || l1 || l2){
            curr.next = new ListNode();
            curr = curr.next;
        }
    }
    return head;
};