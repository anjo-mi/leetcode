/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */


function cloneGraph(node: _Node | null): _Node | null {
    if (!node) return null;
    const clone: Record<number, _Node> = {};
    const v = new Set<number>();
    const q: _Node[] = [node];
    clone[node.val] = new _Node(node.val);
    while (q.length) {
        const n = q.shift()!;
        if (v.has(n.val)) continue;
        v.add(n.val);
        for (const neighbor of n.neighbors) {
            if (!(neighbor.val in clone)) {
                clone[neighbor.val] = new _Node(neighbor.val);
            }
            clone[n.val].neighbors.push(clone[neighbor.val]);
            q.push(neighbor);
        }
    }
    return clone[node.val];
}