/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p || !q) return p === null && q === null;
    const pq:TreeNode[] = [p];
    const pvals:(number | null)[] = [p.val];
    while (pq.length){
        const node = pq.shift();
        pvals.push(node.left?.val ?? null);
        pvals.push(node.right?.val ?? null);
        if (node.left) pq.push(node.left);
        if (node.right) pq.push(node.right);
    }
    const qq:TreeNode[] = [q];
    const qvals:(number | null)[] = [q.val];
    while (qq.length){
        const node = qq.shift();
        qvals.push(node.left?.val ?? null);
        qvals.push(node.right?.val ?? null);
        if (node.left) qq.push(node.left);
        if (node.right) qq.push(node.right);
    }
    if (pvals.length !== qvals.length) return false;
    for (let i = 0 ; i < pvals.length ; i++){
        const pv = pvals[i];
        const qv = qvals[i];
        if (qv !== pv) return false;
    }
    return true;
};