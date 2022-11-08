const totalCount = () => {
  let firstCounter = 3;
  let secondCounter = 5;
  let count = 0;

  while (firstCounter < 1000) {
    count += firstCounter;
    firstCounter += 3;
  }
  while (secondCounter < 1000) {
    if (secondCounter % 3) {
      count += secondCounter;
    }
    secondCounter += 5;
  }
  return count;
};
console.log(totalCount());
