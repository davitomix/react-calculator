import calculate from './calculate';

const fakeCalc = {
  total: '100',
  next: '50',
  operation: '+',
};

const resultSum = {
  total: '150',
  next: null,
  operation: null,
};

describe('returns an object with the correct values', () => {
  it('should return an object', () => {
    expect(calculate(fakeCalc, '=')).toBeInstanceOf(Object);
  });

  it('should return the correct value of sum', () => {
    expect(calculate(fakeCalc, '=')).toEqual(resultSum);
  });

  it('should return NaN to wrong input', () => {
    expect(calculate(fakeCalc, 'd')).toEqual(null);
  });
});