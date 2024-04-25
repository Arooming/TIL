// 단어 변환
function solution(begin, target, words) {
  var answer = 0;
  function checkWordCount(str1, str2) {
    let cnt = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) cnt++;
    }
    return cnt === 1;
  }

  const queue = [begin];
  const visited = {};
  visited[begin] = 0;

  while (queue.length) {
    const cur = queue.shift();

    if (cur === target) break;

    for (const word of words) {
      if (checkWordCount(word, cur) && !visited[word]) {
        queue.push(word);
        visited[word] = visited[cur] + 1;
      }
    }
  }
  return visited[target] ? visited[target] : 0;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
