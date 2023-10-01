// H-Index
function solution(citations) {
    citations = citations.sort((a, b) => b - a);
    let i = 0;
    while (i + 1 <= citations[i]) {
        i++;
    }
    return i;

}

console.log(solution([47, 42, 32, 28, 24, 22, 17, 15, 10, 10, 8]));
console.log(solution([3, 0, 6, 1, 5]));