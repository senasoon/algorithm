function solution(citations) {
  let answer = citations.length;
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (
      citations[answer - 1] >= answer &&
      citations.length - answer <= answer
    ) {
      break;
    } else {
      answer--;
    }
  }
  return answer;
}

console.log(solution([0, 0, 0, 0]));
