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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head) return null;
    if (!head.next) return head;
    let length = 0;
    let c:ListNode | null = head;
    while (c){
        length++;
        c = c.next;
    };
    if (k <= 0 || k % length === 0) return head;
    k = length - (k % length);
    let curr:ListNode | null = head,
        prev:ListNode | null = null;
    while (curr && k){
        prev = curr;
        curr = curr.next;
        k--;
    }
    if (prev) prev.next = null;
    let tail:ListNode | null = curr;
    while (tail && tail.next) tail = tail.next;
    tail.next = head;
    return curr;
};