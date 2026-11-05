// function canReach(s: string, minJump: number, maxJump: number): boolean {
//     if (s[0] === '1') return false;
//     if (!s.length) return false;
//     if (s.length === 1 && s[0] === '0') return true;
//     for (let i = maxJump ; i >= minJump ; i--){
//         if (canReach(s.slice(i), minJump,maxJump)) return true;
//     }
//     return false;
// };

function canReach(s: string, minJump: number, maxJump: number): boolean {
    const n = s.length;
    if (s[n - 1] === '1') return false;
    const reach = new Array<boolean>(n).fill(false);
    reach[0] = true;
    let inWindow = 0;
    for (let i = 1; i < n; i++) {
        if (i >= minJump && reach[i - minJump]) inWindow++;
        if (i > maxJump && reach[i - maxJump - 1]) inWindow--;
        reach[i] = s[i] === '0' && inWindow > 0;
    }
    return reach[n - 1];
}