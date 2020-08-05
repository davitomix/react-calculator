import calculate from './calculate';

const fakeCalc = {
  total: '100',
  next: '50',
  operation: '+',
};

describe('returns an object with the correct values', () => {
  it('should return an object', () => {
    expect(calculate(fakeCalc, '=')).toBeInstanceOf(Object);
  });

  // it('should return null to wrong input', () => {
  //   expect(calculate(fakeCalc, 'd')).toEqual(null);
  // });
});