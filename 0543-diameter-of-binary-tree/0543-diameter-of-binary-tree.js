/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var diameterOfBinaryTree = function(root) {
    let max = 0;
    const depth = (r) => {
        if (!r) return 0;
        const left = depth(r.left);
        const right = depth(r.right);
        max = Math.max(max,left + right);
        return 1 + Math.max(left,right);
    }
    depth(root);
    return max;
    // if (!root) return 0;
    // let max = 0;
    // const leftDepth = diameterOfBinaryTree(root.left)
    // const rightDepth = diameterOfBinaryTree(root.right)
    // const currentDiameter = (leftDepth + rightDepth)
    // return 1 + Math.max(max, currentDiameter)
};