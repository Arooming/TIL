// 모의고사
function solution(answers) {
  const answer = [0, 0, 0];
  const result = [];
  const a = [1, 2, 3, 4, 5];
  const b = [2, 1, 2, 3, 2, 4, 2, 5];
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === a[i % a.length]) answer[0]++;
    if (answers[i] === b[i % b.length]) answer[1]++;
    if (answers[i] === c[i % c.length]) answer[2]++;
  }

  const maxNum = Math.max(...answer);
  answer.map((it, idx) => it === maxNum && result.push(idx + 1));

  return result;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
