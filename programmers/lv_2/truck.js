// 다리를 지나는 트럭
function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let bridge = Array(bridge_length).fill(0);

  while (bridge.length) {
    bridge.shift();
    if (truck_weights.length) {
      const sum_bridge = bridge.reduce((a, b) => a + b, 0);

      if (sum_bridge + truck_weights[0] <= weight) {
        bridge.push(truck_weights.shift());
      } else {
        bridge.push(0);
      }
    }
    answer++;
  }
  return answer;
}
