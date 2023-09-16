// 체육복
function solution(n, lost, reserve) {
  const lostStud = lost
    .sort((a, b) => a - b)
    .filter((lost) => !reserve.includes(lost));

  let reserveStud = reserve
    .sort((a, b) => a - b)
    .filter((reserve) => !lost.includes(reserve));

  const finalLost = lostStud.filter((lost) => {
    let canLendStud = reserveStud.find(
      (reserve) => Math.abs(lost - reserve) === 1
    );

    if (!canLendStud) return lost;

    reserveStud = reserveStud.filter((reserve) => (reserve -= canLendStud));
  });

  return n - finalLost.length;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
