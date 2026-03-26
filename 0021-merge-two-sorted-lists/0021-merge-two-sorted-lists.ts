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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1) return l2;
    if (!l2) return l1;
    const head = Math.min(l1.val,l2.val) === l1.val ? l1 : l2;
    let curr = head,
        c1 = head.next,
        c2 = head === l1 ? l2 : l1;
    while (c1 && c2){
        const next = Math.min(c1.val,c2.val) === c1.val ? c1 : c2;
        curr.next = next;
        curr = curr.next;
        if (next === c1) c1 = c1.next;
        if (next === c2) c2 = c2.next;
    }
    if (c1) curr.next = c1;
    if (c2) curr.next = c2;
    return head;
};