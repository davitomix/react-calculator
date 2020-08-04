import operate from './operate';

const calculate = ({ total, next, operation }, btnName) => {
  if (btnName === '=') {
    if (next && operation) {
      return ({ total: operate(total, next, operation), next: null, operation: null });
    }
  }

  return null;
};

export default calculate;
