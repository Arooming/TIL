// 의상
function solution(clothes) {
  let answer = 1;
  const obj = {};
  for (let i = 0; i < clothes.length; i++) {
    obj.hasOwnProperty(clothes[i][1])
      ? (obj[clothes[i][1]] += 1)
      : (obj[clothes[i][1]] = 1);
  }

  for (let key in obj) {
    // 해당 종류의 의상을 입지 않는 경우까지 고려하여 +1
    answer *= obj[key] + 1;
  }

  // 모든 의상 입지 않는 경우 제외
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
