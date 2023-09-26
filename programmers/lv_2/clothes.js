// 의상
function solution(clothes) {
  let answer = 1;
  let obj = {};

  for (let i = 0; i < clothes.length; i++) {
    // obj[key] = value;
    // 카테고리에 해당하는 의상이 없는 경우, 1로 대체
    // 카테고리에 해당하는 의상이 있는 경우, 의상의 개수 1 증가
    // 의상을 입지 않는 경우도 고려하여 +1
    obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
  }

  for (let key in obj) {
    // key는 obj의 key 값
    // obj[key]는 obj의 value 값
    answer *= obj[key];
  }

  // 의상을 모두 입지 않는 경우는 제외
  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);
