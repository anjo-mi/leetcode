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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let c1:ListNode | null = list1;
    let c2:ListNode | null = list2;
    if (!c1) return c2;
    if (!c2) return c1;
    let h:ListNode | null = !c1 ? c2 
                   : !c2 ? c1 
                   : c1.val <= c2.val ? c1 : c2;
    const head:ListNode | null = h;
    if (c1.val === h.val) c1 = c1.next;
    else c2 = c2.next;
    while (c1 && c2){
        const next:ListNode = !c1 ? c2 
                   : !c2 ? c1 
                   : c1.val <= c2.val ? c1 : c2;
        if (c1?.val === next.val) c1 = c1.next;
        else c2 = c2.next;
        h.next = next;
        h = h.next;
    }
    if (c1) h.next = c1;
    if (c2) h.next = c2;
    return head;
};