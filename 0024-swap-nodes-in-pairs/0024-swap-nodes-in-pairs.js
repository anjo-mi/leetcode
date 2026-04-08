/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}

if (!prev)
    curr.next = next.next;
    next.next = curr;
    prev = curr;
    curr = curr.next;
    next = curr?.next || null;

 */
var swapPairs = function(head) {
    let curr = head,
        next = head?.next || null,
        prev = null;
    while (curr && next){
        if (!prev) head = next;
        else prev.next = next;

        curr.next = next.next;
        next.next = curr;

        prev = curr;
        curr = curr.next;
        next = curr?.next || null;
    }
    return head;
};
