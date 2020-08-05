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
      ? (new Big(num1)[operations[operand]](new Big(num2)))
      : null;
  } catch (error) {
    return NaN;
  }
};

export default operate;
