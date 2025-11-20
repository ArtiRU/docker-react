import { sum } from '@/utils/helpers';

describe(sum, () => {
  test('should return sum', () => {
    expect(sum(2, 3)).toEqual(5);
  });
});
