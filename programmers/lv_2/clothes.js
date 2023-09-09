function solution(clothes) {
  let types = {};
  let result = 1;

  clothes.forEach((v) => (types[v[1]] = (types[v[1]] || 0) + 1));

  for (const key in types) {
    result *= types[key] + 1;
  }

  return result - 1;
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
