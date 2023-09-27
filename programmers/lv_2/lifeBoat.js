// 구명 조끼 - 투포인터 활용이 핵심!
// 오름차순 정렬 풀이 - 이게 효율성이 더 좋음!
function solution(people, limit) {
  var answer = 0;

  people.sort((a, b) => b - a);
  for (var i = 0, j = people.length - 1; i <= j; i++) {
    if (people[i] + people[j] <= limit) {
      j--;
    }
    answer++;
  }

  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 50, 80], 100));

// 내림차순 정렬  풀이
/*
function solution(people, limit) {
  var answer = 0;

  people.sort((a, b) => a - b);
  for (var i = 0, j = people.length - 1; i <= j; j--) {
    if (people[i] + people[j] <= limit) {
      i++;
    }
    answer++;
  }

  return answer;
}
*/
