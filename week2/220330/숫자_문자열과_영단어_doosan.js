

값이 나오지 않는 이유를 모르겠습니다우ㅜㅜ
function solution(s) {
  const numList = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  let answer = "";
  let a = s;
  for (const num in numList) {
    let regex = new RegExp(num, "g");
    console.log(regex);
    const c = a.replace(regex, numList[num]);
    console.log(a, regex, numList[num], a.replace(regex, numList[num]));
    a = c;
  }

  return a;
}
