// 모음 사전
function solution(word) {
  var answer = 0;
  const str = "";
  const result = [];
  for (let i = 1; i <= 5; i++) {
    dfs(str, i, result);
  }

  function dfs(word, length, result) {
    const vowels = [..."AEIOU"];
    if (word.length === length) {
      result.push(word);
      return;
    }

    vowels.forEach((vowel) => {
      dfs(word + vowel, length, result);
    });
  }

  return result.sort().indexOf(word) + 1;
}
