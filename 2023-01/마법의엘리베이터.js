function solution(storey) {
  const storeyList = String(storey)
    .split("")
    .map((v) => Number(v));
  let answer = 0;

  for (let i = storeyList.length - 1; i >= 1; i--) {
    if (storeyList[i] === 10) {
      storeyList[i] = 0;
      storeyList[i - 1] += 1;
    } else if (storeyList[i] <= 4) {
      answer += storeyList[i];
    } else if (storeyList[i] >= 6) {
      answer += 10 - storeyList[i];
      storeyList[i - 1] += 1;
    } else if (storeyList[i] === 5) {
      answer += 5;
      if (storeyList[i - 1] >= 5) {
        storeyList[i - 1] += 1;
      }
    }
  }

  storeyList[0] <= 5 ? (answer += storeyList[0]) : (answer += 11 - storeyList[0]);

  return answer;
}
