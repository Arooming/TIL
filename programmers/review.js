// 의상
function solution(clothes) {
  var answer = 1;
  let obj = {};

  for (let i = 0; i < clothes.length; i++) {
    // 카테고리에 해당하는 의상이 있는 경우 +1
    // 카테고리에 해당하는 의상이 없는 경우 1로 대체
    obj[clothes[i][1]] ? (obj[clothes[i][1]] += 1) : (obj[clothes[i][1]] = 1);
  }

  for (let key in obj) {
    // 카테고리에 해당하는 의상을 입지 않을 경우 포함 +1
    answer *= obj[key] + 1;
  }

  // 문제 조건에서 아무 의상도 입지 않을 경우는 제외했기 때문에 -1
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
