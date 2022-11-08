const totalCount = () => {
  let n = 1000;
  let firstLimit = Math.ceil(n / 3);
  let secondLimit = Math.ceil(n / 5);
  let differenceLimit = Math.ceil(n / 15);

  return (
    arithmeticSum(3, firstLimit) +
    arithmeticSum(5, secondLimit) -
    arithmeticSum(15, differenceLimit)
  );
};

const arithmeticSum = (item, count) => {
  return ((count - 1) * item * count) / 2;
};

console.log(totalCount());
