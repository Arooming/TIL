// 전화번호 목록
function solution(phone_book) {
  const sortedArr = phone_book.sort();

  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i + 1].slice(0, sortedArr[i].length) === sortedArr[i]) {
      return false;
    }
  }
  return true;
}
console.log(solution(["119", "97674223", "1195524421"]));
console.log(solution(["123", "456", "789"]));
