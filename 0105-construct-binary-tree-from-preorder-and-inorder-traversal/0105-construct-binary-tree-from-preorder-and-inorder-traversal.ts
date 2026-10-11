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

function buildTree(pre: number[], ino: number[]): TreeNode | null {
    if (!pre.length || !ino.length) return null;
    const r = new TreeNode(pre.shift());
    const index = ino.indexOf(r.val);
    const leftIn = ino.slice(0,index);
    const rightIn = ino.slice(index + 1);
    const leftPre = pre.slice(0,leftIn.length);
    const rightPre = pre.slice(leftIn.length);
    r.left = buildTree(leftPre,leftIn);
    r.right = buildTree(rightPre,rightIn);
    return r;
};