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

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return true;
    const mirror = (r1:TreeNode | null, r2:TreeNode | null) => {
        if (!r1 && !r2) return true;
        if (!r1 || !r2) return false;
        if (r1.val !== r2.val) return false;
        return mirror(r1.left,r2.right) && mirror(r1.right,r2.left);
    }
    return mirror(root.left,root.right);
};