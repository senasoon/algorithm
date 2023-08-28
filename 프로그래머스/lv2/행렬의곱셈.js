function solution(arr1, arr2) {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    const temp = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let l = 0; l < arr1[i].length; l++) {
        sum += arr1[i][l] * arr2[l][j];
      }
      temp.push(sum);
    }
    answer.push(temp);
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
);
