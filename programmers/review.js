// 완주하지 못한 선수
function solution(participant, completion) {
  const sortedParticipant = participant.sort();
  const sortedCompletion = completion.sort();

  for (let i = 0; i < sortedCompletion.length; i++) {
    if (sortedCompletion[i] !== sortedParticipant[i]) {
      return sortedParticipant[i];
    }
  }

  return sortedParticipant[sortedParticipant.length - 1];
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
);
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
