// 조이스틱
// 조이스틱
function solution(name) {
  const nameArr = [...name];
  // 커서 이동 횟수: 문자열에 'A'가 없다면 이게 커서 최소 이동 횟수임.
  let minMove = name.length - 1;
  // 알파벳 이동 횟수
  let answer = 0;

  nameArr.map((n, i) => {
    answer += Math.min(
      n.charCodeAt() - "A".charCodeAt(),
      // Z의 아스키코드 + 1(A -> Z로 가는 횟수 1회)
      "Z".charCodeAt() + 1 - n.charCodeAt()
    );

    let idx = i + 1;

    // 연속되는 A의 개수 count
    while (name[idx] === "A" && idx < name.length) {
      idx++;
    }

    // i: 현재 알파벳 앞의 알파벳 수, 2: 왔다 갔다하는 횟수, name.length - idx: 현재 알파벳 뒤의 알파벳 수
    // minMove: 알파벳 순서대로 가는것, i * 2 + (name.length - idx): 뒤로 돌아가는 것, i + 2 * (name.length - idx): 맨 뒤 -> 맨 앞으로 와서 탐색하는 것
    minMove = Math.min(
      minMove,
      i * 2 + (name.length - idx),
      i + 2 * (name.length - idx)
    );
  });

  return answer + minMove;
}
console.log(solution("JEROEN"));
console.log(solution("JAN"));

/* 다른 풀이
function solution(name) {
  let answer = 0;
  const min = 65;
  const max = 90 + 1;

  const findChar = (find) => {
    const findCode = find.charCodeAt();
    return Math.min(findCode - min, max - findCode);
  };

  const chars = name.split("").map((c) => findChar(c));
  let minMove = chars.length - 1;

  chars.forEach((char, idx) => {
    answer += char;

    let cursor = idx + 1;
    while (cursor < chars.length && chars[cursor] === 0) cursor++;

    minMove = Math.min(
      minMove,
      idx * 2 + chars.length - cursor,
      idx + 2 * (chars.length - cursor)
    );
  });

  return answer + minMove;
}
*/
