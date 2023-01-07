function solution(participant, completion) {
  participant.sort();
  completion.sort();

  const answer = { name: "" };

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer.name = participant[i];
      break;
    }
  }

  return answer.name;
}
