function solution(s) {
  let stringArr = s.split("");
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    if (stringArr.slice(0, i + 1).indexOf(stringArr[i]) === i) {
      answer.push(-1);
    } else {
      let frontNum = 0;
      for (let j = i - 1; j >= 0; j--) {
        frontNum++;
        if (stringArr[j] === stringArr[i]) {
          break;
        }
      }
      answer.push(frontNum);
    }
  }
  return answer;
}
