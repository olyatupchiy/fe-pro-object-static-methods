import { entries, fromEntries, keys, values } from '../index';

describe('Object method', function () {
  describe('"keys"', function () {
    it('should returns correct value', () => {
      expect(keys({ name: 'name', value: 'value' })).toEqual(['name', 'value']);
    });
  });

  describe('"values"', function () {
    it('should returns correct value', () => {
      expect(values({ name: 'name1', value: 'value1' })).toEqual([
        'name1',
        'value1',
      ]);
    });
  });

  describe('"entries"', function () {
    it('should returns correct value', () => {
      expect(entries({ name: 'name1', value: 'value1' })).toEqual([
        ['name', 'name1'],
        ['value', 'value1'],
      ]);
    });
  });

  describe('"fromEntries"', function () {
    it('should returns correct value', () => {
      expect(
        fromEntries([
          ['key', 'value'],
          ['foo', 'bar'],
        ])
      ).toEqual({
        key: 'value',
        foo: 'bar',
      });
    });
  });
});
