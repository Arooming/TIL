// K번째 수
function solution(array, commands) {
  let answer = [];
  // spice(n번째 숫자, 1): n번째 숫자/문자만 추출 가능!!
  // sort() 메소드 활용 시, 오름차순과 내림차순 알맞게 표시하기 -> sort((a, b) => a - b) 이런 식으로!
  commands.map((i) =>
    answer.push(array.slice(i[0] - 1, i[1]).sort((a, b) => a - b)[i[2] - 1])
  );

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
