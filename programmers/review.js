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
console.log(solution([1, 3, 2, 4, 2]));
console.log(solution([1, 2, 3, 4, 5]));