function solution(phone_book) {
  const prefix_map = new Map();

  for (let i = 0; i < phone_book.length; i++) {
    prefix_map.set(phone_book[i], true);
  }

  for (let i = 0; i < phone_book.length; i++) {
    for (let j = 1; j < phone_book[i].length; j++) {
      if (prefix_map.get(phone_book[i].slice(0, j))) {
        return false;
      }
    }
  }

  return true;
}

console.log(solution(['123', '456', '789']));
