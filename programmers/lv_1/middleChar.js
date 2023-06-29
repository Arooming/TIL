// 가운데 글자 가져오기
function solution(s) {
  let halfLength = s.length / 2;
  return s.length % 2 !== 0
    ? s.slice(halfLength, halfLength + 1)
    : s.slice(halfLength - 1, halfLength + 1);
}

console.log(solution("abcde"));
console.log(solution("qwer"));
