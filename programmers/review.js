// 모음 사전
function solution(word) {
  const arr = [];
  let str = "";

  for (let i = 1; i <= 5; i++) {
    dfs(str, i, arr);
  }

  function dfs(str, length, arr) {
    const words = [..."AEIOU"];
    if (str.length === length) {
      arr.push(str);
      return;
    }

    words.forEach((word) => {
      dfs(word + str, length, arr);
    });
  }
  return arr.sort().indexOf(word) + 1;
}

console.log(solution("AAAAE"));
console.log(solution("AAAE"));
console.log(solution("I"));
console.log(solution("EIO"));
