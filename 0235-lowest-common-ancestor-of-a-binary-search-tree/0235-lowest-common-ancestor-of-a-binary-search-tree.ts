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

interface IRec {
    node: TreeNode;
    ancestors: TreeNode[];
}

function lowestCommonAncestor(root: TreeNode | null, a: TreeNode | null, b: TreeNode | null): TreeNode | null {
    if (!root) return null;
    let aAnc:TreeNode[] = [];
    let bAnc:TreeNode[] = [];
	const q:IRec[] = [{node:root, ancestors: [root]}];
    while (q.length){
        if (aAnc.length && bAnc.length) break;
        const {node,ancestors} = q.shift();
        if (node === a) aAnc = [...ancestors];
        if (node === b) bAnc = [...ancestors];
        if (node.left) q.push({node:node.left,ancestors: [...ancestors,node.left]});
        if (node.right) q.push({node:node.right,ancestors: [...ancestors,node.right]});
    }
    const minLength = Math.min(aAnc.length,bAnc.length);
    aAnc.length = minLength;
    bAnc.length = minLength;
    for (let i = minLength - 1 ; i >= 0 ; i--) if (aAnc[i] === bAnc[i]) return aAnc[i];
    return null;
};