function solution(park, routes) {
  let answer = [0, 0];
  const parkObj = new Map();
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[i].length; j++) {
      if (park[i][j] === 'S') {
        answer = [i, j];
      }
      parkObj.set(`${i}_${j}`, park[i][j]);
    }
  }

  for (let i = 0; i < routes.length; i++) {
    for (let j = 1; j <= +routes[i][2]; j++) {
      if (routes[i][0] === 'E') {
        if (
          parkObj.get(`${answer[0]}_${answer[1] + j}`) === 'X' ||
          !parkObj.get(`${answer[0]}_${answer[1] + j}`)
        ) {
          break;
        }
        if (j === +routes[i][2]) {
          answer[1] += j;
        }
      } else if (routes[i][0] === 'W') {
        if (
          parkObj.get(`${answer[0]}_${answer[1] - j}`) === 'X' ||
          !parkObj.get(`${answer[0]}_${answer[1] - j}`)
        ) {
          break;
        }
        if (j === +routes[i][2]) {
          answer[1] -= j;
        }
      } else if (routes[i][0] === 'N') {
        if (
          parkObj.get(`${answer[0] - j}_${answer[1]}`) === 'X' ||
          !parkObj.get(`${answer[0] - j}_${answer[1]}`)
        ) {
          break;
        }
        if (j === +routes[i][2]) {
          answer[0] -= j;
        }
      } else if (routes[i][0] === 'S') {
        if (
          parkObj.get(`${answer[0] + j}_${answer[1]}`) === 'X' ||
          !parkObj.get(`${answer[0] + j}_${answer[1]}`)
        ) {
          break;
        }
        if (j === +routes[i][2]) {
          answer[0] += j;
        }
      }
    }
  }
  return answer;
}

console.log(
  solution(['O0S', 'OOO', 'OXO', 'OOO'], ['N 1', 'N 1', 'N 1', 'N 1', 'N 1'])
);
