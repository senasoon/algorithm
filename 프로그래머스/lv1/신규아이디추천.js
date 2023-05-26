function solution(new_id) {
  new_id = new_id.toLowerCase();
  new_id = new_id.match(/[a-z0-9\-\_\.]/g).join('');
  new_id = new_id.replace(/\.\.+/g, '.');
  if (new_id[0] === '.') {
    new_id = new_id.slice(1);
  }
  if (new_id[new_id.length - 1] === '.') {
    new_id = new_id.slice(0, new_id.length - 1);
  }
  if (new_id === '') {
    new_id = 'a';
  }
  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15);
    if (new_id[14] === '.') {
      new_id = new_id.slice(0, new_id.length - 1);
    }
  }
  if (new_id.length <= 2) {
    const last_str = new_id[new_id.length - 1];
    for (let i = new_id.length; i < 3; i++) {
      new_id += last_str;
    }
  }
  return new_id;
}

console.log(solution('...!@BaT#*..y.abcdefghijklm'));
