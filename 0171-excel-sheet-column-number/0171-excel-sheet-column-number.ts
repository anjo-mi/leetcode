function titleToNumber(title: string): number {
    const places = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const order = places.split('').reduce((a,el,i) => {
        a[el] = i;
        return a;
    },{} as Record<string,number>);
    let l = title.length;
    return title.split('').reduce((a,el) => a += order[el] * (26 ** --l), 0);
};