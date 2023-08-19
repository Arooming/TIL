// 모의고사
function solution(answers) {
  var answer = [];

  let a = [1, 2, 3, 4, 5];
  let b = [2, 1, 2, 3, 2, 4, 2, 5];
  let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let countA = 0;
  let countB = 0;
  let countC = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === a[i % a.length]) {
      countA += 1;
    }
    if (answers[i] === b[i % b.length]) {
      countB += 1;
    }
    if (answers[i] === c[i % c.length]) {
      countC += 1;
    }
  }

  let max = Math.max(countA, countB, countC);

  if (countA === max) {
    answer.push(1);
  }

  if (countB === max) {
    answer.push(2);
  }
  if (countC === max) {
    answer.push(3);
  }

  return answer;
}

console.log(solution([1, 3, 2, 4, 2]));
