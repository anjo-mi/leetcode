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

 const findParentAndDepth = (root:TreeNode,node:number) => {
    const q = [{curr:root, depth:0, parent:null}];
    while (q.length){
        const {curr,depth, parent} = q.shift();
        if (curr.val === node) return {depth, parent};
        if (curr.left !== null) q.push({curr:curr.left, depth: depth + 1, parent:curr.val});
        if (curr.right !== null) q.push({curr:curr.right, depth: depth + 1, parent:curr.val});
    }
    return {depth:null, parent:null};
}

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
    const xFamilyBranch:Record<string,number | null> = findParentAndDepth(root,x);
    const yFamilyBranch:Record<string,number | null> = findParentAndDepth(root,y);
    return xFamilyBranch.depth === yFamilyBranch.depth && xFamilyBranch.parent !== yFamilyBranch.parent;
};