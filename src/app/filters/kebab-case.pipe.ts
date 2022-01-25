import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebabCase'
})
export class KebabCasePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value.replace('-',' ');
  }

}
