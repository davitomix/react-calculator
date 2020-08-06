import Big from 'big.js';
import operate from './operate';

const MAX = new Big('10000000000000000');

export const formatNumber = (number) => {
  if (isNaN(number)) return number;
  const num = new Big(number);
  return (num > (MAX) ? num.toExponential(15) : num.toFixed()).slice(0, 20);
};

export const addNumber = (next, input) => {
  if (input >= '0' && input <= '9') return { next: next + input };
  if (input === '.') return next.includes('.') ? { next } : { next: next + input };
  return null;
};

const functions = {
  '=': (total, next, operation) => {
    if (next && operation) {
      return ({ total: operate(total, next || total, operation), next: null, operation: null });
    }
    return ({});
  },

  AC: () => ({ total: null, next: null, operation: null }),

  '±': (total, next) => (next ? ({ next: -next }) : ({ total: -total })),

  '%': (total, next, operation) => {
    if (operation) {
      const result = operate(total, next || total, operation);
      if (result) {
        if (next !== null) {
          return ({ total: operate(next, '100', '÷'), next: null, operation: null });
        }
        return ({ total: operate(total, '100', '÷'), next: null, operation: null });
      }
    }
    return ({});
  },
};

export const calculate = ({ total, next, operation }, btnName) => {
  const result = functions[btnName](total, next, operation);
  return result;
};