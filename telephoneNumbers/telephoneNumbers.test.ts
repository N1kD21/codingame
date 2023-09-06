import { fun } from "./telephoneNumbersNew";
import {expect, jest, test, describe} from '@jest/globals';


describe('the can', () => {
  test('countElement be 10', () => {
    expect(fun([
      '0467123456'
    ])).toBe(10);
  });
  
  test('countElement be 20', () => {
    expect(fun([
      '0123456789',
      '1123456789'
    ])).toBe(20);
  });
  test('countElement be 10', () => {
    expect(fun([
      '0123456789',
      '0123'
    ])).toBe(10);
  });

  test('countElement be 28', () => {
    expect(fun([
      '0412578440',
      '0412199803',
      '112',
      '0468892011',
      '15',
      '1234n4'
    ])).toBe(28);
  });
  
});

