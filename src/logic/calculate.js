import Big from 'big.js';
import operate from './operate';

const MAX = new Big('10000000000000000');

export const formatNumber = (number) => {
  if (isNaN(number)) return number;
  const num = new Big(number);
  return (num > (MAX) ? num.toExponential(15) : num.toFixed()).slice(0, 20);
};

const functions = {
  '=': (total, next, operation) => {
    if (next && operation) {
      return ({ total: operate(total, next, operation), next: null, operation: null });
    }
    return ({});
  },

  AC: () => ({ total: null, next: null, operation: null }),

  '±': (total, next) => (next ? ({ next: -next }) : ({ total: -total })),

  '%': (total, next, operation) => {
    if (operation) {
      if (next !== null) {
        return ({ total: operate(next, '100', '÷'), next: null, operation: null });
      }
      return ({ total: operate(total, '100', '÷'), next: null, operation: null });
    }
    return ({});
  },
};

export const calculate = ({ total, next, operation }, btnName) => {
  const result = functions[btnName](total, next, operation);
  return result;
};