// 전화번호 목록
function solution(phone_book) {
  const sortedBook = phone_book.sort();
  let answer = false;
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (sortedBook[i + 1].slice(0, sortedBook[i].length) === sortedBook[i]) {
      return false;
    } else {
      answer = true;
    }
  }

  return answer;
}

console.log(solution(["119", "97674223", "1195524421"]));
console.log(solution(["123", "456", "789"]));
console.log(solution(["12", "123", "1235", "567", "88"]));
