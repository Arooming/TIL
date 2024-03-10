// 의상
function solution(clothes) {
  let answer = 1;
  const obj = {};

  for (let i = 0; i < clothes.length; i++) {
    // clothes[i][1]에 해당하는 의상이 있는 경우, 해당 종류의 의상 개수 +1
    // clothes[i][1]에 해당하는 의상이 없는 경우, 1로 초기화
    // 아무것도 입지 않는 경우를 고려하여 +1
    // obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
    obj[clothes[i][1]] =
      (obj.hasOwnProperty(clothes[i][1]) ? obj[clothes[i][1]]++ : 1) + 1;
  }

  for (let key in obj) {
    // 서로 다른 옷 조합 계산
    answer *= obj[key];
  }

  // 아무 것도 입지 않는 경우 제외하기 위해 -1
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
