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

// interface treeStep {
//     node: TreeNode;
//     path: TreeNode[];
// }

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (!root || !p || !q) return null;
    const parent = new Map<TreeNode, TreeNode | null>([[root, null]]);
    const qu: TreeNode[] = [root];
    let i = 0;
    while (i < qu.length && (!parent.has(p) || !parent.has(q))) {
        const node = qu[i++];
        if (node.left)  { parent.set(node.left, node);  qu.push(node.left); }
        if (node.right) { parent.set(node.right, node); qu.push(node.right); }
    }
    const ancestors = new Set<TreeNode>();
    for (let cur: TreeNode | null = p; cur; cur = parent.get(cur) ?? null) ancestors.add(cur);
    let cur: TreeNode | null = q;
    while (cur && !ancestors.has(cur)) cur = parent.get(cur) ?? null;
    return cur;
	// if (!root) return null;
    // const qu:treeStep[] = [{node:root, path:[root]}];
    // let pPath:TreeNode[] = [];
    // let qPath:TreeNode[] = [];
    // while (qu.length){
    //     const {node,path} = qu.shift();
    //     if (node.val === p.val) pPath = path;
    //     if (node.val === q.val) qPath = path;
    //     if (pPath.length && qPath.length) break;
    //     if (node.left) qu.push({node:node.left,path:[...path,node.left]});
    //     if (node.right) qu.push({node:node.right,path:[...path,node.right]});
    // }
    // let shared:TreeNode | null = null;
    // for (let i = 0 ; i < Math.min(qPath.length,pPath.length); i++){
    //     if (pPath[i].val !== qPath[i].val) break;
    //     shared = pPath[i];
    // }
    // return shared;
};