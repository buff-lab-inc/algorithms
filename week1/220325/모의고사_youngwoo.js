function solution(answers) {
    let answer = [0, 0, 0];
    
    for (let n = 0; n < answers.length; n++) {
        checkAnswer.forEach((f, id) => f(answers, answer, id, n));
    }
    
    let max = Math.max(...answer);
    return answer
        .map((x, id) => [x , id+1])     // 수포자가 맞춘 갯수와 id로 묶기
        .filter(([x, _]) => x === max)      // 맞춘 갯수가 가장 많은 사람들만 남기기
        .map(([_, id])=> id)                 // 수포자 id값으로 변경
        .sort((a, b) => a - b);         // 오름차순 정렬
}

const checkAnswer = [
    (answers, answer, id, n) => {
        answer[id] += answers[n] === [1, 2, 3, 4, 5][n % 5];
    },
    
    (answers, answer, id, n) => {
        answer[id] += answers[n] === [2, 1, 2, 3, 2, 4, 2, 5][n % 8];
    },
    
    (answers, answer, id, n) => {
        answer[id] += answers[n] === [3, 3, 1, 1, 2, 2, 4, 4, 5, 5][n % 10];
    },
]