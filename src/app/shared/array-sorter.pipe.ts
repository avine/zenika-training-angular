import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySorter',
})
export class ArraySorterPipe implements PipeTransform {
  transform<T extends {}>(array: T[] | null, prop?: keyof T): T[] | null {
    if (!array || !prop) {
      return array;
    }
    return [...array].sort((a: T, b: T) => {
      if (a[prop] > b[prop]) return 1;
      if (a[prop] < b[prop]) return -1;
      return 0;
    });
  }
}
