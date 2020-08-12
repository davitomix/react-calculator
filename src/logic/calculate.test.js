import {
  calculate, formatNumber, addNumber, setOperation,
} from './calculate';

let fakeCalc = {
  total: '100',
  next: '50',
  operation: null,
};

const sum = {
  total: '150',
  next: null,
  operation: null,
};

const minus = {
  total: '50',
  next: null,
  operation: null,
};

const times = {
  total: '5000',
  next: null,
  operation: null,
};

const div = {
  total: '2',
  next: null,
  operation: null,
};

const invalidDiv = {
  total: NaN,
  next: null,
  operation: null,
};

const ac = {
  total: null,
  next: null,
  operation: null,
};

const percentage = {
  total: '5.2',
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
  it('should return the obj with null when is given AC', () => {
    expect(calculate(fakeCalc, 'AC')).toEqual(ac);
  });
  it('should change the sign of next when given ±', () => {
    fakeCalc.total = '5';
    fakeCalc.next = '5';
    expect(calculate(fakeCalc, '±')).toEqual({ next: -5 });
  });
  it('should change the sign of total when given ±', () => {
    fakeCalc.total = '1';
    fakeCalc.next = null;
    expect(calculate(fakeCalc, '±')).toEqual({ total: -1 });
  });
  it('should return 5.2 when given % of 520', () => {
    fakeCalc = { total: 520, next: null, operation: '÷' };
    expect(calculate(fakeCalc, '%')).toEqual(percentage);
  });
});

describe('format number func', () => {
  it('returns nan when given nan', () => {
    expect(formatNumber(NaN)).toEqual(NaN);
  });
  it('returns the correct format number', () => {
    expect(formatNumber('2000')).toBe('2000');
  });
  it('returns a string', () => {
    expect(typeof (formatNumber('2000'))).toBe('string');
  });
  it('returns the correct forma when given a max value number', () => {
    expect(formatNumber('10000000000000001')).toBe('1.000000000000000e+1');
  });
});

describe('add number func', () => {
  it('returns null no inputs is given', () => {
    expect(addNumber(null, '9999')).toBe(null);
  });
  it('returns 99 adding 9 and 9', () => {
    expect(addNumber('9', '6').next).toBe('96');
  });
  it('returns 99. adding a decimal point', () => {
    expect(addNumber('99', '.').next).toBe('99.');
  });
  it('returns 99.9 when given a number with deciaml point', () => {
    expect(addNumber('99.', '9').next).toBe('99.9');
  });
  it('returns the same number when the given number has already a dot', () => {
    expect(addNumber('99.9', '.').next).toBe('99.9');
  });
});

describe('set operation func', () => {
  it('should return null when operation isnt valid', () => {
    expect(setOperation(null, null, 'r', null)).toBe(null);
  });
  it('should return total with the correct value', () => {
    expect(setOperation('5', '4', '+', '+').total).toBe('9');
  });
  it('should return NaN when given worng arguments', () => {
    expect(setOperation('5', '+', '+', '+').total).toBe(NaN);
  });
  it('should return next when no op', () => {
    expect(setOperation('5', '4', null, '+').total).toBe('4');
  });
});
