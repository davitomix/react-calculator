import Big from 'big.js';

const operate = (num1, num2, operand) => {
  const numFirst = Big(num1 || 0);
  const numSecond = Big(num2);
  switch (operand) {
    case '+':
      // .plus
      return numFirst.plus(numSecond).toString();
    default:
      return NaN;
  }
};

export default operate;
