interface PointDists {
    coords: [number,number];
    dist: number;
}

function kClosest(points: number[][], k: number): number[][] {
    const withDists:PointDists[] = points.map(([x,y]) => {
        const dist = Math.sqrt(x**2 + y**2);
        return {coords: [x,y], dist};
    })
    return withDists.sort((a,b) => a.dist - b.dist).map(el => el.coords).slice(0,k);
};