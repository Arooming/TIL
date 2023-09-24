// 조이스틱
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

console.log(solution("JEROEN"));
console.log(solution("JAN"));
