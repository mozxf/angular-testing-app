/**
 * Generates an array of sequential numbers from `start` to `end` (exclusive).
 *
 * @param start - The starting number of the range (inclusive).
 * @param end - The ending number of the range (exclusive).
 * @returns An array containing numbers from `start` to `end - 1`.
 *
 * @example
 * ```ts
 * range(3, 7); // [3, 4, 5, 6]
 * ```
 */
export const range = (start: number, end: number) => {
  return [...Array(end - start).keys()].map((i) => i + start);
};

/**
 * Extracts a specific property from each object in an array.
 *
 * @typeParam T - The type of objects in the array.
 * @typeParam K - The key of the property to extract from each object.
 *
 * @param elements - An array of objects.
 * @param field - The key of the property to pluck from each object.
 * @returns An array containing the values of the specified property.
 *
 * @example
 * ```ts
 * const users = [{ name: 'Alice' }, { name: 'Bob' }];
 * const names = pluck(users, 'name'); // ['Alice', 'Bob']
 * ```
 */
export const pluck = <T, K extends keyof T>(
  elements: T[],
  field: K
): T[K][] => {
  return elements.map((el) => el[field]);
};
