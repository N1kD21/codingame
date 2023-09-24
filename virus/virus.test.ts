
import {expect, jest, test, describe} from '@jest/globals';
import { fun } from './main';

describe('the can', () => {
  test('countElement be 10', () => {
    expect(fun(`4 4 1
    0 1
    0 2
    1 3
    2 3
    3`)).toBe(10);
  });
  
});

