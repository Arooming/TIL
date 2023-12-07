// 전화번호 목록
function solution(phone_book) {
  const newPhoneBook = phone_book.sort();

  for (let i = 0; i < newPhoneBook.length - 1; i++) {
    if (
      newPhoneBook[i + 1].slice(0, newPhoneBook[i].length) === newPhoneBook[i]
    ) {
      return false;
    }
  }
  return true;
}

console.log(solution(["119", "97674223", "1195524421"]));
console.log(solution(["123", "456", "789"]));
console.log(solution(["12", "123", "1235", "567", "88"]));
console.log(solution(["12", "1334", "13345", "567", "88"]));
