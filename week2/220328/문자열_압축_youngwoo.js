function solution(s) {
    const divisors = getAllDivisors(s.length);
    console.log(s, divisors);
    
    let minimumLength = s.length;
    
    for (let d of divisors) {
        let subs = s.match(new RegExp('.{1,' + d + '}', 'g'));
        
        minimumLength = Math.min(minimumLength, compression(subs));
    }
    
    return minimumLength;
}

function getAllDivisors(l) {
    const result = [];
    
    for (let i = parseInt(l / 2); i > 0; i--) {
        result.push(i);
    }
    
    return result;
}

function compression(subs) {
    let overlapCounts = [];
    
    let temp = "";
    
    for (let i = 0; i < subs.length; i++) {
        if (subs[i] != temp) {
            temp = subs[i];
            overlapCounts.push([subs[i], 1]);
        } else {
            overlapCounts[overlapCounts.length - 1][1]++;
        }
    }
    
    return overlapCounts.reduce((comp, token) => (token[1] > 1) ? comp + `${token[1]}${token[0]}` : comp + token[0], "").length;
}