function solution(n) {
  let bigNum = n;

  while (bigNum++) {
    const nToBinary = n.toString(2);
    const bigNumToBinary = bigNum.toString(2);

    const nToBinaryfilteredLength = nToBinary.split("0").join("").length;
    const bigNumToBinaryfilteredLength = bigNumToBinary
      .split("0")
      .join("").length;

    if (nToBinaryfilteredLength === bigNumToBinaryfilteredLength) {
      return bigNum;
    }
  }
}
