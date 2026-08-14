// interface CheckPoint {
//     curr :number;
//     stops:number;
//     cost :number;
//     vis  :Set<number>;
// }

// function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
//     const trips:Record<string,Record<string,number>> = flights.reduce((a,el) => {
//         const [from,to,price] = el;
//         if (!(from in a)) a[from] = {};
//         a[from][to] = price;
//         return a;
//     }, {});
//     let min:number = Infinity;
//     const q:CheckPoint[] = [{curr:src, stops:k, cost:0, vis:new Set<number>()}];
//     while (q.length){
//         const {curr,stops,cost,vis} = q.shift();
//         if (curr === dst) min = Math.min(cost,min);
//         if (vis.has(+curr)) continue;
//         vis.add(+curr);
//         if (stops >= 0 && curr in trips) for (const dest in trips[curr]){
//             q.push({
//                 curr: +dest,
//                 stops: stops - 1,
//                 cost: cost + trips[curr][dest],
//                 vis,
//             })
//         }
//         vis.delete(+curr);
//     }
//     return isFinite(min) ? min : -1;
// };

function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    let dist = new Array(n).fill(Infinity);
    dist[src] = 0;
    for (let i = 0; i <= k; i++) {
        const next = [...dist];
        for (const [from, to, price] of flights) {
            if (dist[from] === Infinity) continue;
            if (dist[from] + price < next[to]) {
                next[to] = dist[from] + price;
            }
        }
        dist = next;
    }
    return dist[dst] === Infinity ? -1 : dist[dst];
}