// 모음 사전
function solution(word) {
  let str = "";
  const result = [];

  for (let i = 1; i <= 5; i++) {
    dfs(str, i, result);
  }

  function dfs(str, length, result) {
    const vowels = [..."AEIOU"];
    if (str.length === length) {
      return result.push(str);
    }

    vowels.forEach((vowel) => {
      dfs(str + vowel, length, result);
    });
  }

  return result.sort().indexOf(word) + 1;
}

console.log(solution("AAAAE"));
console.log(solution("AAAE"));
console.log(solution("I"));
console.log(solution("EIO"));
