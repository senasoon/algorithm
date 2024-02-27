function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length; i++) {
    if (
      i !== phone_book.length - 1 &&
      phone_book[i + 1].indexOf(phone_book[i]) === 0
    )
      return false;
  }

  return true;
}

function solution(phone_book) {
  const hash = {};
  for (let i of phone_book) {
    hash[i] = 1;
  }

  for (let phone_num of phone_book) {
    let tmp = '';
    for (let num of phone_num) {
      tmp += num;
      if (hash[tmp] && tmp !== phone_num) {
        return false;
      }
    }
  }
  return true;
}

console.log(solution(['119', '97674223', '1195524421']));
