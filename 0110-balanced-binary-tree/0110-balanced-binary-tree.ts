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

const checkLevels = (root:TreeNode | null):number => {
    if (!root) return 0;

    const left = checkLevels(root.left);
    const right = checkLevels(root.right);

    if (left < 0 || right < 0 || Math.abs(left - right) > 1) return -1;
    return Math.max(left,right) + 1;
}

function isBalanced(root: TreeNode | null): boolean {
    return checkLevels(root) >= 0;
};