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

// interface IStepper {
//     key:string;
//     steps:number;
//     path: string[];
// }

// function diameterOfBinaryTree(root: TreeNode | null): number {
//     if (!root) return 0;
//     const adj:Record<string,number[]> = {}
//     const q:TreeNode[] = [root];
//     while (q.length){
//         const node = q.shift();
//         if (!(node.val.toString() in adj)) adj[node.val] = [];
//         if (node.right) {
//             if (!(node.right.val.toString() in adj)) adj[node.right.val] = [];
//             adj[node.val].push(node.right.val);
//             adj[node.right.val].push(node.val);
//             q.push(node.right);
//         }
//         if (node.left) {
//             if (!(node.left.val.toString() in adj)) adj[node.left.val] = [];
//             adj[node.val].push(node.left.val);
//             adj[node.left.val].push(node.val);
//             q.push(node.left);
//         }
//     }
//     let max:number = 0;
//     for (const key in adj){
//         const q:IStepper[] = [{key, steps:0,path:[key]}];
//         while (q.length){
//             const {key,steps,path} = q.pop();
//             if (!adj[key].length) max = Math.max(steps,max);
//             for (const neighbor of adj[key]){
//                 if (!path.includes(neighbor.toString())){
//                     q.push({
//                         key:neighbor.toString(),
//                         steps:steps+1,
//                         path:[...path,neighbor.toString()] 
//                     });
//                 }else max = Math.max(steps,max);
//             }
//         }
//     }
//     return max;
// };

function diameterOfBinaryTree(root: TreeNode | null): number {
    let max = 0;
    function height(node: TreeNode | null): number {
        if (!node) return 0;
        const left = height(node.left);
        const right = height(node.right);
        max = Math.max(max, left + right);
        return 1 + Math.max(left,right);
    }
    height(root);
    return max;
}