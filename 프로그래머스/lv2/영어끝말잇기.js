function solution(n, words) {
  let obj = {};
  for (let i = 1; i <= n; i++) {
    obj[i] = [];
  }

  for (let i = 0; i < words.length; i++) {
    const index = i + 1 < n ? i + 1 : Math.floor((i + 1) % n || n);
    obj[index] !== []
      ? (obj[index] = [...obj[index], words[i]])
      : (obj[index] = words[i]);
    if (i > 0) {
      if (words[i][0] !== words[i - 1][words[i - 1].length - 1]) {
        return [index, obj[index].length];
      }
    }
    if (words.indexOf(words[i]) !== i) {
      return [index, obj[index].length];
    }
    if (words[i].length === 1) {
      return [index, obj[index].length];
    }
  }
  return [0, 0];
}

console.log(solution(2, ['qwe', 'eqwe', 'eqwe']));
