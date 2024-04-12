// 체육복
function solution(n, lost, reserve) {
  let lostStudent = lost.filter((lost) => !reserve.includes(lost)).sort();
  const reserveStudent = reserve
    .filter((reserve) => !lost.includes(reserve))
    .sort();

  for (let i = 0; i < n; i++) {
    if (lostStudent.includes(reserveStudent[i] - 1)) {
      lostStudent = lostStudent.filter(
        (lost) => lost !== reserveStudent[i] - 1
      );
    } else if (lostStudent.includes(reserveStudent[i] + 1)) {
      lostStudent = lostStudent.filter(
        (lost) => lost !== reserveStudent[i] + 1
      );
    }
  }

  return n - lostStudent.length;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
