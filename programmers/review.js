// 의상
function solution(clothes) {
  let answer = 1;
  const obj = {};

  for (let i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]] =
      (obj.hasOwnProperty(clothes[i][1]) ? obj[clothes[i][1]]++ : 1) + 1;
  }

  for (let key in obj) {
    answer *= obj[key];
  }

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
