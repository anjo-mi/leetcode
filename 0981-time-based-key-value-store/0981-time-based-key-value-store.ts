// class TimeMap {
//     map: Map<string,Record<string,string>>;
//     constructor() {
//         this.map = new Map<string,Record<string,string>>();
//     }

//     set(key: string, value: string, timestamp: number): void {
//         const rec:Record<string,string> = this.map.has(key) ? this.map.get(key) : {};
//         rec[timestamp.toString()] = value;
//         this.map.set(key,rec);
//     }

//     get(key: string, timestamp: number): string {
//         const rec:Record<string,string> | null = this.map.get(key) || null;
//         if (!rec) return '';
//         const stamps = Object.keys(rec).filter(stamp => +stamp <= +timestamp);
//         return stamps.length ? rec[stamps[stamps.length - 1]] : '';
//         // while (timestamp > 0){
//         //     if (timestamp.toString() in rec) return rec[timestamp.toString()];
//         //     timestamp--;
//         // }
//         // return '';
//     }
// }
class TimeMap {
    map: Map<string, Record<string, string>>;
    stamps: Map<string, number[]>;
    constructor() {
        this.map = new Map();
        this.stamps = new Map();
    }

    set(key: string, value: string, timestamp: number): void {
        const rec: Record<string, string> = this.map.has(key) ? this.map.get(key)! : {};
        rec[timestamp.toString()] = value;
        this.map.set(key, rec);
        if (!this.stamps.has(key)) this.stamps.set(key, []);
        this.stamps.get(key)!.push(timestamp);
    }

    get(key: string, timestamp: number): string {
        const rec = this.map.get(key);
        const arr = this.stamps.get(key);
        if (!rec || !arr) return '';
        let lo = 0, hi = arr.length - 1, ans = -1;
        while (lo <= hi) {
            const mid = Math.floor((lo + hi) / 2);
            if (arr[mid] <= timestamp) {
                ans = arr[mid];
                lo = mid + 1;
            }else hi = mid - 1;
         }
        return ans === -1 ? '' : rec[ans.toString()];
    }
}


/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */