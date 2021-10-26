export function randomInt(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    default:
      return 0;
  }
}

export function randomGradesGenerator(classPopulation) {
  let res = [];
  for (let i = 0; i < classPopulation; i++) {
    res.push(randomInt(75, 99));
  }
  return res;
}
