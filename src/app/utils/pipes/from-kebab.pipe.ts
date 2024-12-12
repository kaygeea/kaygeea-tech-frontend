import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fromKebab',
  standalone: true
})
export class FromKebabPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace('-', ' ');
  }

}
