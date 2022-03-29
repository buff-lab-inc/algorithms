function solution(numbers, target) {
    return dfs(numbers, target, 0, 0, 0);
}


function dfs(numbers, target, depth, sum, count) {
    
    if (depth === numbers.length) 
        return sum === target ? count + 1 : count;

    const addedNumbers = [numbers[depth], -numbers[depth]];

    addedNumbers.forEach(num => {
        count = dfs(numbers, target, depth+1, sum + num, count);
    })

    return count;
}

console.log(solution([1,1,1,1,1], 3))   // 5
console.log(solution([4,1,2,1], 4))     // 2
