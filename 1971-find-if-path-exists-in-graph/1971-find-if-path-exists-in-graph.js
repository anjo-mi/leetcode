/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, start, end) {
    const graph = {};
    for (const [a,b] of edges){
        graph[a] = (graph[a] || []);
        graph[b] = (graph[b] || []);
        graph[a].push(b);
        graph[b].push(a);
    }
    const q = [{curr:start, prev:null}];
    const visited = new Set();
    while (q.length){
        const {curr,prev} = q.pop();
        if (visited.has(curr)) continue;
        if (curr === end) return true;
        visited.add(curr);
        for (const neighbor of graph[curr]){
            if (prev !== neighbor) q.push({curr:neighbor, prev:curr});
        }
    }
    return false;
};