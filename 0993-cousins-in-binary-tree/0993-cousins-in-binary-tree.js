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

const findParentAndDepth = (root,node) => {
    const q = [{curr:root, depth:0, parent:null}];
    while (q.length){
        const {curr,depth, parent} = q.shift();
        if (curr.val === node) return {depth, parent};
        if (curr.left !== null) q.push({curr:curr.left, depth: depth + 1, parent:curr});
        if (curr.right !== null) q.push({curr:curr.right, depth: depth + 1, parent:curr});
    }
    return {depth:null, parent:null};
}

var isCousins = function(root, x, y) {
    const xFamilyBranch = findParentAndDepth(root,x);
    const yFamilyBranch = findParentAndDepth(root,y);
    return xFamilyBranch.depth === yFamilyBranch.depth && xFamilyBranch.parent !== yFamilyBranch.parent;
};