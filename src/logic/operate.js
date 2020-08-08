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
      ? (new Big(num1)[operations[operand]](new Big(num2))).toString()
      : null;
  } catch (error) {
    return NaN;
  }
};

operate.isValid = operation => !!operations[operation];

export default operate;
