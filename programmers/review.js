// 모음 사전
function solution(word) {
  let str = "";
  const result = [];

  function dfs(str, idx, result) {
    const vowels = [..."AEIOU"];
    if (str.length === idx) {
      result.push(str);
      return;
    }

    vowels.forEach((vowel) => {
      dfs(str + vowel, idx, result);
    });
  }

  for (let i = 1; i <= 5; i++) {
    dfs(str, i, result);
  }

  return result.sort().indexOf(word) + 1;
}
