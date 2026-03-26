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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let size = 0;
    let curr = head;
    while (curr){
        curr = curr.next;
        size++;
    }
    let removed = size - n;
    if (!removed) return head.next;
    curr = head;
    let prev = null;
    while (curr && removed){
        prev = curr;
        curr = curr.next;
        removed--;
    }
    prev.next = curr?.next;
    return head;
};