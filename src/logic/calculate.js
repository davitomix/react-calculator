import operate from './operate';

const functions = {
  '=': (total, next, operation) => {
    if (next && operation) {
      return ({ total: operate(total, next, operation), next: null, operation: null });
    }
    return ({});
  },
  AC: () => ({ total: null, next: null, operation: null }),
};

const calculate = ({ total, next, operation }, btnName) => {
  const result = functions[btnName](total, next, operation);
  if (result) return result;
  return null;
};

export default calculate;
