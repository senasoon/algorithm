function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);
  for (let i = 0; i < people.length; i++) {
    if (people[i] + people[people.length - 1 - i] > limit) {
      people.pop();
      answer++;
      i--;
    } else {
      people.pop();
      people.shift();
      answer++;
      i--;
    }
  }

  return answer;
}

console.log(solution([20, 40, 70, 70, 50, 80, 50], 100));
