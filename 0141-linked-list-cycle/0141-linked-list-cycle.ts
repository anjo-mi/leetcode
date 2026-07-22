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

function hasCycle(head: ListNode | null): boolean {
    if (!head) return false;
    let curr:ListNode | null = head;
    let next:ListNode | null = head.next;
    while (next && next.next){
        if (curr === next) return true
        curr = curr.next;
        next = next.next.next;
    }
    return false;
};