// 모의고사
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

/*
function solution(answers) {
  const answerA = [1, 2, 3, 4, 5];
  const answerB = [2, 1, 2, 3, 2, 4, 2, 5];
  const answerC = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const result = [0, 0, 0];

  let finalAnswer = [];

  answers.map((answer, i) =>
    answer === answerA[i % answerA.length] ? result[0]++ : result[0]
  );
  answers.map((answer, i) =>
    answer === answerB[i % answerB.length] ? result[1]++ : result[1]
  );
  answers.map((answer, i) =>
    answer === answerC[i % answerC.length] ? result[2]++ : result[2]
  );

  let max = Math.max(result[0], result[1], result[2]);

  max === result[0] && finalAnswer.push(1);
  max === result[1] && finalAnswer.push(2);
  max === result[2] && finalAnswer.push(3);

  return finalAnswer;
}
*/

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
