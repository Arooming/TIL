// 모음 사전
function solution(word) {
  const result = [];
  const str = "";

  const dfs = (word, length, result) => {
    const arr = [..."AEIOU"];
    if (length === word.length) {
      result.push(word);
      return;
    }

    arr.forEach((it) => {
      dfs(word + it, length, result);
    });
  };

  for (let i = 1; i <= 5; i++) {
    dfs(str, i, result);
  }

  return result.sort().indexOf(word) + 1;
}

console.log(solution("AAAAE"));
console.log(solution("AAAE"));
console.log(solution("I"));
console.log(solution("EIO"));
