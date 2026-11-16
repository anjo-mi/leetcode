// const findDepth = (tree:Record<string,number[]> | null ,root:string ):number => {
//     if (!root) return 0;
//     const q = [{node:root, d:0}];
//     const seen = new Set<string>();
//     let max = 0;
//     while (q.length){
//         const {node:curr,d} = q.shift();
//         if (seen.has(curr)) max = Math.max(d,max);
//         seen.add(curr.toString());
//         if (!tree[curr].length) max = Math.max(max,d);
//         else{
//             for (const n of tree[curr]){
//                 if (!seen.has(n.toString())) q.push({node:n.toString(), d:d+1});
//                 seen.add(n.toString())
//             }
//         }
//     }
//     return max;
// }

// function findMinHeightTrees(n: number, edges: number[][]): number[] {
//     if (n === 1 || !edges.length) return [0];
//     const adj:Record<string,number[]> = {};
//     for (const [a,b] of edges){
//         if (!(a in adj)) adj[a] = [];
//         if (!(b in adj)) adj[b] = [];
//         adj[a].push(b);
//         adj[b].push(a);
//     }
//     let currMin = Infinity;
//     let res:number[] = [];
//     for (const n in adj){
//         const depth = findDepth(adj,n);
//         if (depth === currMin) res.push(+n);
//         if (depth <   currMin) {
//             res = [+n];
//             currMin = depth;
//         }
//     }
//     return res;
// };

function findMinHeightTrees(n: number, edges: number[][]): number[] {
    if (n === 1) return [0];
    const adj: number[][] = Array.from({ length: n }, () => []);
    const deg: number[] = new Array(n).fill(0);
    for (const [a, b] of edges) {
        adj[a].push(b);
        adj[b].push(a);
        deg[a]++;
        deg[b]++;
    }
    let leaves: number[] = [];
    for (let i = 0; i < n; i++) if (deg[i] === 1) leaves.push(i);
    let remaining = n;
    while (remaining > 2) {
        remaining -= leaves.length;
        const next: number[] = [];
        for (const leaf of leaves) {
            for (const nb of adj[leaf]) if (--deg[nb] === 1) next.push(nb);
        }
        leaves = next;
    }
    return leaves;
}