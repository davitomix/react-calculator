import Big from 'big.js';
import calculate from './calculate';

const fakeCalc = {
  total: '100',
  next: '50',
  operation: null,
};

const sum = {
  total: new Big(150),
  next: null,
  operation: null,
};

const minus = {
  total: new Big(50),
  next: null,
  operation: null,
};

const times = {
  total: new Big(5000),
  next: null,
  operation: null,
};

const div = {
  total: new Big(2),
  next: null,
  operation: null,
};

const invalidDiv = {
  total: NaN,
  next: null,
  operation: null,
};

describe('returns an object with the correct values', () => {
  it('should return an object', () => {
    expect(calculate(fakeCalc, '=')).toBeInstanceOf(Object);
  });
  it('should be correct value of total when sum', () => {
    fakeCalc.operation = '+';
    expect(calculate(fakeCalc, '=')).toEqual(sum);
  });
  it('should be correct value of total when minus', () => {
    fakeCalc.operation = '-';
    expect(calculate(fakeCalc, '=')).toEqual(minus);
  });
  it('should be correct value of total when times', () => {
    fakeCalc.operation = '×';
    expect(calculate(fakeCalc, '=')).toEqual(times);
  });
  it('should be correct value of total when div', () => {
    fakeCalc.operation = '÷';
    expect(calculate(fakeCalc, '=')).toEqual(div);
  });
  it('should be correct value of total when div by zero', () => {
    fakeCalc.next = '0';
    fakeCalc.operation = '÷';
    expect(calculate(fakeCalc, '=')).toEqual(invalidDiv);
  });
});