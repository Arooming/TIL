// 단어 변환
function solution(begin, target, words) {
  // 한 글자만 다른 경우 체크
  function canChange(str1, str2) {
    let cnt = 0;
    for (let i = 0; i < str1.length; i++) {
      str1[i] !== str2[i] && cnt++;
    }

    return cnt === 1;
  }

  const visited = {};
  const queue = [];

  // begin 방문 체크
  visited[begin] = 0;
  queue.push(begin);

  while (queue.length) {
    const cur = queue.shift();

    // queue에서 빼온 값이 target 값과 같은 경우 반복문 탈출
    if (cur === target) break;

    // 단어 배열(words) 탐색
    for (const word of words) {
      // 현재 비교 대상과 words에 저장된 단어가 한 글자만 차이나고, 아직 방문하지 않은 경우
      if (canChange(cur, word) && !visited[word]) {
        //queue에 넣기
        queue.push(word);
        // 현재 탐색 중인 단어의 방문거리 = 이전 탐색한 단어의 방문 거리 + 1
        visited[word] = visited[cur] + 1;
      }
    }
  }

  // target 자체가 존재하지 않는 경우 0 리턴 (조건에 명시되어 있음)
  return visited[target] ? visited[target] : 0;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
