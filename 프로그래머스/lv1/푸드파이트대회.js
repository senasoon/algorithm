function solution(food) {
  var answer = "0";
  for (let i = food.length - 1; i > 0; i--) {
    if (food[i] >= 2) {
      const repeatNumber = String(i).repeat(Math.floor(food[i] / 2));
      answer = repeatNumber + answer + repeatNumber;
    }
  }
  return answer;
}
