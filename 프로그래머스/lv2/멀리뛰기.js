function solution(n) {
  const d = {};
  function dp(x) {
    if (x === 1) return 1;
    if (x === 2) return 2;
    if (d[x]) return d[x];
    d[x] = (dp(x - 1) % 1234567) + (dp(x - 2) % 1234567);
    return d[x];
  }
  return dp(n) % 1234567;
}

console.log(solution(4));
