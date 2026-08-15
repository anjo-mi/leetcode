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
    // let count = 0,
    //     curr = head;
    // while (curr){
    //     curr = curr.next;
    //     count++;
    // }
    // curr = head;
    // count = Math.floor(count / 2);
    // while (count > 0){
    //     curr = curr.next;
    //     count--;
    // }
    // return curr;
    if (!head) return null;
    let curr = head,
        next = curr.next;
    while (next && next.next){
        curr = curr.next;
        next = next.next.next;
    }
    return next ? curr.next : curr;
};