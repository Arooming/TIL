// 체육복
function solution(n, lost, reserve) {
  let lost_student = lost.filter((l) => !reserve.includes(l)).sort();
  const reserve_student = reserve.filter((r) => !lost.includes(r)).sort();
  
  for(let i = 0 ; i < n; i++) {
      if(lost_student.includes(reserve_student[i] - 1)) {
          lost_student = lost_student.filter((lost) => lost !== reserve_student[i] - 1);
      } else if (lost_student.includes(reserve_student[i] + 1)) {
          lost_student = lost_student.filter((lost) => lost !== reserve_student[i] + 1);
      }
  }
  
  return n - lost_student.length;
}