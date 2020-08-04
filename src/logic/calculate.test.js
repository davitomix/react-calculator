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
  it('the method should return an object', () => {
    expect(calculate(fakeCalc, '=')).toBeInstanceOf(Object);
  });

  it('the method should return an object', () => {
    expect(calculate(fakeCalc, '=')).toEqual(resultSum);
  });
});