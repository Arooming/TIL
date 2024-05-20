// 조이스틱
function solution(name) {
  var answer = 0;
  let minMove = name.length - 1;

  const nameArr = [...name];

  nameArr.map((nameChar, i) => {
    answer += Math.min(
      nameChar.charCodeAt() - "A".charCodeAt(),
      "Z".charCodeAt() + 1 - nameChar.charCodeAt()
    );

    let idx = i + 1;
    while (name[idx] === "A" && idx < name.length) {
      idx++;
    }

    minMove = Math.min(
      minMove,
      2 * i + (name.length - idx),
      i + 2 * (name.length - idx)
    );
  });
  return answer + minMove;
}
