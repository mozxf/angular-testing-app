import { Injectable } from '@angular/core';
import { pluck, range } from '../../../../utils/utils';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
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
  pluck<T, K extends keyof T>(elements: T[], field: K): T[K][] {
    return elements.map((el) => el[field]);
  }

  range(start: number, end: number): number[] {
    return [...Array(end - start).keys()].map((i) => i + start);
  }
}
