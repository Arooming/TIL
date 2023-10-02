// 피로도 - dfs 활용 풀이
function solution(k, dungeons) {
  var answer = 0;
  // 방문 체크용 배열
  const visited = Array(dungeons.length).fill(false);

  // count: 방문한 던전 수
  // k: 현재 피로도
  function dfs(count, k) {
    for (let i = 0; i < dungeons.length; i++) {
      // 현재 피로도가 소모 피로도 이상 && 방문하지 않은 던전일 경우
      if (k >= dungeons[i][0] && !visited[i]) {
        // 방문 체크
        visited[i] = 1;
        // count는 1 증가
        // 갱신된 현재 피로도 = 이전 피로도 - 소모 피로도
        dfs(count + 1, k - dungeons[i][1]);
        // 백트래킹을 위해 방문 여부 초기화
        visited[i] = 0;
      }
    }

    // answer에 가장 깊이 들어간 진행단계 대입 
    answer = Math.max(count, answer);
  }

  // count = 0, k = k를 매개변수로 한 dfs 실행
  dfs(0, k);

  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
