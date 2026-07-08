/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
    if (!head) return null;
    let curr = head,
        next = head.next;
    while (next && next.next){
        next = next.next.next;
        curr = curr.next;
    }
    return next ? curr.next : curr;
};