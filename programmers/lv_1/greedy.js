function solution(n, lost, reserve) {
  var answer = 0;

  // 1. 도난 당하고, 여벌 옷이 없는 사람 - 옷을 빌려야 함
  let lostStud = lost
    .sort((a, b) => a - b)
    .filter((lost) => !reserve.includes(lost));

  // 2. 도난 당하지 않고, 여벌 옷이 있어서 옷을 빌려줄 수 있는 사람 - 옷을 빌려줄 수 있음
  let reserveStud = reserve
    .sort((a, b) => a - b)
    .filter((reserve) => !lost.includes(reserve));

  // 3. 체육복을 빌리지 못해, 수업에 참여할 수 없는 학생 (최종)
  let finalLost = lostStud.filter((lost) => {
    // 체급차이가 1이라 체육복을 빌려줄 수 있는 학생
    let canLendStud = reserveStud.find(
      (canReserve) => Math.abs(lost - canReserve) === 1
    );

    // 체급차이가 1인 학생이 없으면 체육복을 빌릴 수 없음 -> 수업 참여 불가
    if (!canLendStud) return lost;

    // 여벌 옷을 빌려줄 수 있는 학생에서 이미 빌려준 학생은 제외
    reserveStud = reserveStud.filter(
      (canReserve) => canReserve !== canLendStud
    );
  });

  answer = n - finalLost.length;

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
