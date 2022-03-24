function solution(participant, completion) {
    var answer = '';
    
    let pMap = new Map();
    
    participant.forEach(p => {
        pMap.set(p, pMap.has(p) ? pMap.get(p)+1 : 1);
    })
    
    completion.forEach(c => {
        if (pMap.get(c) === 1) pMap.delete(c);
        else if (pMap.get(c) > 1) pMap.set(c, pMap.get(c) - 1);
    })
    
    return pMap.keys().next().value;
}
