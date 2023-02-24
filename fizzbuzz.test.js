const fizzbuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
  test('input of 3', () => {
    expect(fizzbuzz(3)).toBe('fizz');
  });

  test('input of 5', () => {
    expect(fizzbuzz(5)).toBe('buzz');
  });

  test('input of 8', () => {
    expect(fizzbuzz(8)).toBe(8);
  });

  test('input of 15', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz');
  });

  test('input of 18', () => {
    expect(fizzbuzz(18)).toBe('fizz');
  });

  test('input of 20', () => {
    expect(fizzbuzz(20)).toBe('buzz');
  });

  
});