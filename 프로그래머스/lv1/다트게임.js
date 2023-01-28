function solution(dartResult) {
  let answer = [];
  let num = 0;
  for (let i = 0; i < dartResult.length; i++) {
    if (+dartResult[i] >= 0 && +dartResult[i] <= 9) {
      if (+dartResult[i] === 1 && +dartResult[i + 1] === 0) {
        num = 10;
        i++;
      } else {
        num = +dartResult[i];
      }
    }
    if (dartResult[i] === "S") answer.push(num);
    if (dartResult[i] === "D") {
      num = Math.pow(num, 2);
      answer.push(num);
    }
    if (dartResult[i] === "T") {
      num = Math.pow(num, 3);
      answer.push(num);
    }
    if (dartResult[i] === "*") {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    }
    if (dartResult[i] === "#") {
      answer[answer.length - 1] = -answer[answer.length - 1];
    }
  }
  return answer.reduce((acc, cur) => acc + cur, 0);
}
