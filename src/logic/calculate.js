import operate from './operate';

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

const calculate = ({ total, next, operation }, btnName) => {
  const result = functions[btnName](total, next, operation);
  return result;
};

export default calculate;