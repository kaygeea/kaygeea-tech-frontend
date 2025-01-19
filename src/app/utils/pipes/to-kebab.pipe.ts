import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toKebab',
  standalone: true
})
export class ToKebabPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(' ', '-');
  }

}
