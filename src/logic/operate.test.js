import operate from './operate';

describe('Should return the correct values', () => {
  it('should return a String', () => {
    expect(typeof (operate(2, 3, '+'))).toBe('string');
  });
  it('correctly performs a sum', () => {
    expect(operate(2, 3, '+')).toEqual('5');
  });
  it('correctly perfomrs a minus', () => {
    expect(operate(2, 1, '-')).toEqual('1');
  });
  it('correctly performs a multipltication', () => {
    expect(operate(2, 5, '×')).toEqual('10');
  });
  it('correctly performs a division', () => {
    expect(operate(10, 2, '÷')).toEqual('5');
  });
  it('correctly handle division by zero', () => {
    expect(operate(10, 0, '÷')).toEqual(NaN);
  });
  it('returns null when incorrect operaton is given', () => {
    expect(operate(1, 1, 'ds')).toEqual(null);
  });
});