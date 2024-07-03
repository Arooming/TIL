function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    const stringToCode = s[i].charCodeAt();
    if (
      (stringToCode >= 65 && stringToCode <= 90) ||
      (stringToCode >= 97 && stringToCode <= 122)
    ) {
      if (i === 0 || s[i - 1] === " ") {
        answer += s[i].toUpperCase();
      } else {
        answer += s[i].toLowerCase();
      }
    } else {
      answer += s[i];
    }
  }

  return answer;
}
