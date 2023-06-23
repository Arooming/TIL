// 자연수 뒤집어 배열로 만들기
function solution(n) {
  var answer = n.toString();
  return [...answer].reverse().map((it) => parseInt(it));
}
