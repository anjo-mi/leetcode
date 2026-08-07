type Count = Record<string,number>

function canConstruct(ransom: string, mag: string): boolean {
    const ransomCount:Count = ransom.split('').reduce((a,el) => {
        a[el] = (a[el] || 0) + 1;
        return a;
    } ,{});
    const magCount:Count = mag.split('').reduce((a,el) => {
        a[el] = (a[el] || 0) + 1;
        return a;
    } ,{});

    for (const char in ransomCount){
        if (!(char in magCount) || ransomCount[char] > magCount[char]) return false;
    }
    return true;
};