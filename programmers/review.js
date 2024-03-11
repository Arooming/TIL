// 모의고사
function solution(answers) {
  const s1 = [1, 2, 3, 4, 5];
  const s2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const arr = [0, 0, 0];
  const answer = [];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === s1[parseInt(i % s1.length)]) arr[0]++;
    if (answers[i] === s2[parseInt(i % s2.length)]) arr[1]++;
    if (answers[i] === s3[parseInt(i % s3.length)]) arr[2]++;
  }

  const max = Math.max(...arr);
  arr.map((_, i) => {
    if (arr[i] === max) {
      answer.push(i + 1);
    }
  });

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
