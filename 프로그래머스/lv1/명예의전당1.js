function solution(k, score) {
  let answer = [];
  let winner = [];
  for (let i = 0; i < score.length; i++) {
    if (winner.length < k) {
      winner.push(score[i]);
    } else if (Math.min(...winner) < score[i]) {
      winner.sort((a, b) => b - a).pop();
      winner.push(score[i]);
    }
    answer.push(Math.min(...winner));
  }
  return answer;
}
