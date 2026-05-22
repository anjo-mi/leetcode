/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

const reverseList = (head,k) => {
    let here = head;
    while (here && k > 1){
        here = here.next;
        k--;
    }
    if (!here) return head;
    let curr = head,
        prev = null;
    while (curr){
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

const severList = (head,k) => {
    let curr = head,
        prev = null;
    while (curr && k > 0){
        prev = curr;
        curr = curr.next;
        k--;
    }
    const remainingList = curr;
    prev.next = null;
    return {head,curr}
}

const findTail = head => {
    let curr = head;
    while (curr && curr.next){
        curr = curr.next;
    }
    return curr;
}

var reverseKGroup = function(head, k) {
    const {head:prev,curr} = severList(head,k);
    if (!curr) return reverseList(prev,k);
    const reversed = reverseList(prev,k);
    const tail = findTail(reversed);
    tail.next = reverseKGroup(curr,k);
    return reversed;

};