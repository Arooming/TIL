// 폰켓몬
function solution(nums) {
  let answer = [];

  answer[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums.length / 2 > answer.length) {
      !answer.includes(nums[i]) ? answer.push(nums[i]) : nums;
    }
  }
  return answer.length;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
