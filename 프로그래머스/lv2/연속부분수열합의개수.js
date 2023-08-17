function solution(elements) {
  let temp = 0;
  const array = [];
  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      for (let k = 0; k < i; k++) {
        const index =
          j + k >= elements.length ? j + k - elements.length : j + k;
        temp += elements[index];
      }
      array.push(temp);
      temp = 0;
    }
  }
  return [...new Set(array)].length;
}

console.log(solution([7, 9, 1, 1, 4]));
