function solution(k, dungeons) {
  let answer = 0;
  const visited = new Array(dungeons.length).fill(false);

  function dfs(hp, L) {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && hp >= dungeons[i][0]) {
        visited[i] = true;
        dfs(hp - dungeons[i][1], L + 1);
        visited[i] = false;
      }

      answer = Math.max(answer, L);
    }
  }

  dfs(k, 0);

  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
