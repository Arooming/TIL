// 조이스틱
function solution(name) {
  let minMove = name.length - 1;
  let answer = 0;

  for (let i = 0; i < name.length; i++) {
    answer += Math.min(
      name[i].charCodeAt() - "A".charCodeAt(),
      "Z".charCodeAt() - name[i].charCodeAt() + 1
    );

    let idx = i + 1;
    while (idx < name.length && name[idx] === "A") idx++;

    minMove = Math.min(
      minMove,
      2 * i + (name.length - idx),
      i + 2 * (name.length - idx)
    );
  }

  return answer + minMove;
}

console.log(solution("JEROEN"));
console.log(solution("JAN"));
