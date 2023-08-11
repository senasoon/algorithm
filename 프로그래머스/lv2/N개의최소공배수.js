function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
    const lcm = (arr[i] * arr[i + 1]) / gcd(arr[i], arr[i + 1]);
    arr[i] = lcm;
    arr.splice(i + 1, 1);
    i--;
  }

  return arr[0];
}

console.log(solution([2, 7]));
