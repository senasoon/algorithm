function solution(s, skip, index) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  s = s.split('').map((str) => {
    let indexNum = alphabet.indexOf(str);
    for (let i = 0; i < index; i++) {
      if (
        skip.includes(
          alphabet[indexNum === alphabet.length - 1 ? 0 : indexNum + 1]
        )
      ) {
        indexNum === alphabet.length - 1 ? (indexNum = 0) : indexNum++;
        i--;
        continue;
      }
      indexNum === alphabet.length - 1 ? (indexNum = 0) : indexNum++;
    }
    return alphabet[indexNum];
  });
  return s.join('');
}

console.log(solution('zzzzz', 'a', 1));
