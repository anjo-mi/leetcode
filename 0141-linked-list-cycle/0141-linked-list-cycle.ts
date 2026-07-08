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

function hasCycle(head: ListNode | null,v=new Set<ListNode>()): boolean {
    if (!head) return false;
    if (v.has(head)) return true;
    v.add(head);
    return hasCycle(head.next,v);
};