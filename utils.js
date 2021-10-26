export function randomGradesGenerator(classPopulation) {
  function randomNum(minNum, maxNum) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * minNum + 1, 10);
        break;
      case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        break;
      default:
        return 0;
        break;
    }
  }

  let res = [];
  for (let i = 0; i < classPopulation; i++) {
    res.push(randomNum(75, 99));
  }
  return res;
}
