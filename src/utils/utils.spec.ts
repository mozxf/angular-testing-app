import { pluck, range } from './utils';

describe('utils', () => {
  describe('range', () => {
    it(`Should return correct range from 1 to 5`, () => {
      expect(range(1, 5)).toEqual([1, 2, 3, 4]);
    });
    it(`Should return correct range from 41 to 44`, () => {
      expect(range(41, 44)).toEqual([41, 42, 43]);
    });
  });

  describe('pluck', () => {
    it("Should return an array mapping 'name' field from the objects array", () => {
      const people = [
        { name: 'John', id: '1' },
        { name: 'Sarah', id: '2' },
      ];

      expect(pluck(people, 'name')).toEqual(['John', 'Sarah']);
      expect(pluck(people, 'id')).toEqual(['1', '2']);
    });
  });
});
