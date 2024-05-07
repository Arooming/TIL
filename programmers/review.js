// 의상
function solution(clothes) {
  let obj = {};
  let answer = 1;

  for (let i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]] = obj[clothes[i][1]] ? obj[clothes[i][1]] + 1 : 1;
  }

  for (const key in obj) {
    answer *= obj[key] + 1;
  }
  return answer - 1;
}
