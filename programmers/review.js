function solution(answers) {
  var counter = [0, 0, 0];
  let a = [1, 2, 3, 4, 5];
  let b = [2, 1, 2, 3, 2, 4, 2, 5];
  let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let answer = [];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === a[i % a.length]) {
      counter[0]++;
    }
    if (answers[i] === b[i % b.length]) {
      counter[1]++;
    }
    if (answers[i] === c[i % c.length]) {
      counter[2]++;
    }
  }

  for (let j = 0; j < counter.length; j++) {
    if (Math.max(counter[0], counter[1], counter[2]) === counter[j]) {
      answer.push(j + 1);
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
