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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
/**
      1
     / \
    2   3
   /   /
  4   5
 */

const findDepthAndParent = (root, val) => {
    const stack = [{curr:root, parent:null, depth:0}];
    while (stack.length){
        const {curr,parent,depth} = stack.pop();
        if (curr.val === val) return {depth, parent};
        if (curr.left !== null) stack.push({curr:curr.left, parent:curr, depth: depth + 1});
        if (curr.right !== null) stack.push({curr:curr.right, parent:curr, depth: depth + 1});
    }
    return {depth: -1, parent:null};
}


var isCousins = function(root, x, y) {
    const xPAndD = findDepthAndParent(root,x);
    const yPAndD = findDepthAndParent(root,y);
    return xPAndD.parent !== yPAndD.parent && xPAndD.depth === yPAndD.depth;
};