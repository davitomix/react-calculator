import Big from 'big.js';

const operate = (num1, num2, operand) => {
  const numFirst = Big(num1 || 0);
  const numSecond = Big(num2);
  switch (operand) {
    case '+':
      return numFirst.plus(numSecond).toString();
    case '-':
      return numFirst.minus(numSecond).toString();
    default:
      return NaN;
  }
};

export default operate;
