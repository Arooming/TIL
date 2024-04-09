// 체육복
function solution(n, lost, reserve) {
  let lost_student = lost.filter((it) => !reserve.includes(it)).sort();
  let reserve_student = reserve.filter((it) => !lost.includes(it)).sort();

  for (let i = 0; i < n; i++) {
    if (lost_student.includes(reserve_student[i] - 1)) {
      lost_student = lost_student.filter((it) => it !== reserve_student[i] - 1);
    } else if (lost_student.includes(reserve_student[i] + 1)) {
      lost_student = lost_student.filter((it) => it !== reserve_student[i] + 1);
    }
  }

  return n - lost_student.length;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
