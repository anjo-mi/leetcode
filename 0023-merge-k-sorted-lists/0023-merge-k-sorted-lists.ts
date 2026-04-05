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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let lowest: number = Infinity;
    for (const head of lists){
        if (head){
            lowest = Math.min(lowest,head.val)
        }
    }
    if (!isFinite(lowest)) return null;
    for (let i = 0 ; i < lists.length ; i++){
        let head = lists[i];
        if (head && head.val === lowest){
            head = head.next;
            lists.splice(i,1,head);
            break;
        }
    }
    const head = new ListNode(lowest);
    head.next = mergeKLists(lists);
    return head;
};

/**
establish lowest num = Infinity;
    iterate thru all the listNodes in lists
        if its not null
        - check if its value is lower than lowest, set if so
if lowest num isnt finite, return null
otherwise, head = new listNode(lowestNum)
reiterate thru the lists
- as soon as we find a head, that equals the lowest
    - that head = head.next, break
head.next = mergeKlists(lists)
return head;
 */