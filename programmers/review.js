function solution(n, lost, reserve) {
  var answer = 0;

  let lostStud = lost
    .sort((a, b) => a - b)
    .filter((lost) => !reserve.includes(lost));

  let reserveStud = reserve
    .sort((a, b) => a - b)
    .filter((reserve) => !lost.includes(reserve));

  let finalLostStud = lostStud.filter((lost) => {
    let canLendStud = reserveStud.find(
      (canReserve) => Math.abs(lost - canReserve) === 1
    );

    if (!canLendStud) return lost;

    reserveStud = reserveStud.filter(
      (canReserve) => canReserve !== canLendStud
    );
  });

  answer = n - finalLostStud.length;

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
