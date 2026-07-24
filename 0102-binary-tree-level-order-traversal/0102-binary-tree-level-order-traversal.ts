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

function levelOrder(root: TreeNode | null): number[][] {
    const levels:number[][] = [];
    if (!root) return levels;
    let q: TreeNode[] = [root];
    while (q.length){
        const level:number[] = [];
        const next:TreeNode[] = [];
        for (const node of q){
            if (node.left) next.push(node.left)
            if (node.right) next.push(node.right)
            level.push(node.val);
        }
        levels.push(level);
        q = next;
    }
    return levels;
};