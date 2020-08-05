import Big from 'big.js';

const operations = {
  '+': 'plus',
  '-': 'minus',
  '×': 'times',
  '÷': 'div',
};

const operate = (num1, num2, operand) => {
  try {
    return operations[operand]
      ? (Big(num1)[operations[operand]](Big(num2)))
      : null;
  } catch (error) {
    return NaN;
  }
};

export default operate;
