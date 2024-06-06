// 다리를 지나는 트럭
function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  const bridge = Array(bridge_length).fill(0);

  while (bridge.length) {
    bridge.shift();
    if (truck_weights.length) {
      const sum = bridge.reduce((a, b) => a + b, 0);
      if (sum + truck_weights[0] <= weight) {
        const go = truck_weights.shift();
        bridge.push(go);
      } else {
        bridge.push(0);
      }
    }
    answer++;
  }
  return answer;
}
