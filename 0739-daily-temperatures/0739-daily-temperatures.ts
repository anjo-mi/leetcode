function dailyTemperatures(temps: number[]): number[] {
    const answer: number[] = new Array(temps.length).fill(0);
    const stack: number[] = [];
    for (let i = 0; i < temps.length; i++) {
        while (stack.length > 0 && temps[i] > temps[stack[stack.length - 1]]) {
            const prev = stack.pop()!;
            answer[prev] = i - prev;
        }
        stack.push(i);
    }
    return answer;
};

// -------------------------------
    // const answer:number[] = [];
    // for (let i = 0 ; i < temps.length ; i++){
    //     for (let j = i + 1 ; j < temps.length ; j++){
    //         if (temps[j] > temps[i]){
    //             answer.push(j-i);
    //             break;
    //         }
    //     }
    //     if (answer.length === i) answer.push(0);
    // }
    // return answer;