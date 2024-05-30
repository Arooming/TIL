// 단어 변환
function solution(begin, target, words) {
  var answer = 0;
  const visited = {};
  const queue = [];

  function checkWords(str1, str2) {
    let cnt = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) cnt++;
    }
    return cnt === 1;
  }

  visited[begin] = 0;
  queue.push(begin);

  while (queue.length) {
    const cur = queue.shift();
    for (let i = 0; i < words.length; i++) {
      if (!visited[words[i]] && checkWords(words[i], cur)) {
        queue.push(words[i]);
        visited[words[i]] = visited[cur] + 1;
      }
    }
  }

  return visited[target] ? visited[target] : 0;
}
