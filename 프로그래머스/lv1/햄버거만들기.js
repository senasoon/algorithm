function solution(ingredient) {
  let answer = 0;
  let ingredientArray = [];
  const hamburger = '1231';
  for (let i = 0; i < ingredient.length; i++) {
    ingredientArray.push(ingredient[i]);
    if (ingredientArray.length < 4) continue;

    if (
      ingredientArray.slice(ingredientArray.length - 4).join('') === hamburger
    ) {
      answer++;
      ingredientArray.pop();
      ingredientArray.pop();
      ingredientArray.pop();
      ingredientArray.pop();
    }
  }
  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
