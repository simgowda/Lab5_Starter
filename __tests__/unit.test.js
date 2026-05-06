// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber (2 true, 2 false)
test('isPhoneNumber: valid format with dash', () => {
  expect(isPhoneNumber('123-4567')).toBe(true);
});

test('isPhoneNumber: valid format with area code', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber: invalid letters', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

test('isPhoneNumber: invalid missing dash', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

// isEmail (2 true, 2 false)
test('isEmail: valid simple email', () => {
  expect(isEmail('user@example.com')).toBe(true);
});

test('isEmail: valid underscore and 2-letter tld', () => {
  expect(isEmail('hello_123@my_domain.co')).toBe(true);
});

test('isEmail: invalid missing at symbol', () => {
  expect(isEmail('userexample.com')).toBe(false);
});

test('isEmail: invalid top-level domain too long', () => {
  expect(isEmail('user@example.comm')).toBe(false);
});

// isStrongPassword (2 true, 2 false)
test('isStrongPassword: valid with underscore and digits', () => {
  expect(isStrongPassword('Aabc_123')).toBe(true);
});

test('isStrongPassword: valid minimum length', () => {
  expect(isStrongPassword('a123')).toBe(true);
});

test('isStrongPassword: invalid starts with number', () => {
  expect(isStrongPassword('1abcde')).toBe(false);
});

test('isStrongPassword: invalid too short', () => {
  expect(isStrongPassword('Ab1')).toBe(false);
});

// isDate (2 true, 2 false)
test('isDate: valid one-digit month and day', () => {
  expect(isDate('1/2/2024')).toBe(true);
});

test('isDate: valid two-digit month and day', () => {
  expect(isDate('12/31/1999')).toBe(true);
});

test('isDate: invalid uses hyphens', () => {
  expect(isDate('12-31-1999')).toBe(false);
});

test('isDate: invalid year not four digits', () => {
  expect(isDate('1/2/24')).toBe(false);
});

// isHexColor (2 true, 2 false)
test('isHexColor: valid 6-digit with hash', () => {
  expect(isHexColor('#1A2b3C')).toBe(true);
});

test('isHexColor: valid 3-digit without hash', () => {
  expect(isHexColor('abc')).toBe(true);
});

test('isHexColor: invalid non-hex character', () => {
  expect(isHexColor('#12G')).toBe(false);
});

test('isHexColor: invalid wrong length', () => {
  expect(isHexColor('#12345')).toBe(false);
});
