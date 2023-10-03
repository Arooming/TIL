// 조이스틱
function solution(name) {
  let answer = 0;
  let minMove = name.length - 1;

  [...name].map((n, i) => {
    answer += Math.min(n.charCodeAt() - 65, 91 - n.charCodeAt());
    let idx = i + 1;

    while (name[idx] === "A" && idx < name.length) {
      idx++;
    }

    minMove = Math.min(
      minMove,
      i * 2 + name.length - idx,
      i + 2 * (name.length - idx)
    );
  });

  return answer + minMove;
}

console.log(solution("JEROEN"));
console.log(solution("JAN"));
