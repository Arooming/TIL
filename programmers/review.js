// 단어 변환
function solution(begin, target, words) {
  const queue = [];
  const visited = {};
  queue.push(begin);
  visited[begin] = 0;

  function canChange(str1, str2) {
    let cnt = 0;
    for (let i = 0; i < str1.length; i++) {
      str1[i] !== str2[i] && cnt++;
    }
    return cnt === 1;
  }

  while (queue.length) {
    const cur = queue.shift();

    if (cur === target) break;

    words.forEach((word) => {
      if (canChange(cur, word) && !visited[word]) {
        queue.push(word);
        visited[word] = visited[cur] + 1;
      }
    });
  }
  return visited[target] ? visited[target] : 0;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
