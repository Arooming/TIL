// 모음 사전
function solution(word) {
  const str = "";
  const arr = [];

  for (let i = 1; i <= 5; i++) {
    dfs(str, i, arr);
  }

  function dfs(str, length, arr) {
    const vowels = [..."AEIOU"];
    if (str.length === length) {
      arr.push(str);
      return;
    }

    vowels.forEach((vowel) => {
      dfs(str + vowel, length, arr);
    });
  }

  return arr.sort().indexOf(word) + 1;
}

console.log(solution("AAAAE"));
console.log(solution("AAAE"));
console.log(solution("I"));
console.log(solution("EIO"));
