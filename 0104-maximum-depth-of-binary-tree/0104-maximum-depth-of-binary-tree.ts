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

interface INodeStep {
    node: TreeNode;
    depth: number;
}

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;
    let max = 0;
    const s:INodeStep[] = [{node:root, depth:1}];
    while (s.length){
        const {node,depth} = s.pop();
        max = Math.max(max,depth);
        if (node.left) s.push({node:node.left,depth:depth+1});
        if (node.right) s.push({node:node.right,depth:depth+1});
    }
    return max;
};