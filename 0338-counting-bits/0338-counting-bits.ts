// const countOnes = (s:string):number => {
//     return s.split('').reduce((a,el) => a += el === '1' ? 1 : 0, 0);
// }

// const toBinary = (n:number):string => {
//     if (n === 0) return "0";
//     let bin = "";
//     while (n > 0) {
//         let remainder = n % 2;
//         bin = remainder + bin;
//         n = Math.floor(n / 2);
//     }
//     return bin;
// }

// function countBits(n: number): number[] {
//     const res:number[] = [];
//     for (let i = 0 ; i <= n ; i++){
//         const bin = toBinary(i);
//         res.push(countOnes(bin));
//     }
//     return res;
// };

// function countBits(n: number): number[] {
//     const res: number[] = new Array(n + 1).fill(0);
//     for (let i = 1; i <= n; i++) {
//         res[i] = res[i & (i - 1)] + 1;
//     }
//     return res;
// }

function countBits(n: number): number[] {
    const res: number[] = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        res[i] = res[i >> 1] + (i & 1);
    }
    return res;
}