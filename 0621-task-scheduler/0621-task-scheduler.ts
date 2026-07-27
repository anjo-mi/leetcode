function leastInterval(tasks: string[], n: number): number {
    const counts: Record<string, number> = {};
    let maxCount = 0;
    for (const t of tasks) {
        counts[t] = (counts[t] || 0) + 1;
        maxCount = Math.max(maxCount, counts[t]);
    }
    const maxTasks = Object.values(counts).filter(c => c === maxCount).length;
    return Math.max(tasks.length, (maxCount - 1) * (n + 1) + maxTasks);
}

// ---------------------------------------------------
    // const counts:Record<string,number> = {};
    // const occurs:Record<string,number> = tasks.reduce((a,el) => {
    //     a[el] = (a[el] || 0) + 1;
    //     return a;
    // }, {});
    // let turns:number = 0;
    // while (tasks.length){
    //     tasks.sort((a,b) => occurs[b]-occurs[a])[0];
    //     const i = tasks.findIndex(task => !(task in counts) || counts[task] <= 0);
    //     console.log({i,tasks,counts})
    //     for (const task in counts) counts[task]--;
    //     if (i >= 0){
    //         counts[tasks[i]] = n;
    //         occurs[tasks[i]]--;
    //         tasks.splice(i,1);
    //     }
    //     turns++;
    // }
    // return turns;