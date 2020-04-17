import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'see'
})
export class SeePipe implements PipeTransform {

  transform(desc:string,limit:number): string {
    return  desc.substr(0, limit) + "... See more";
  }

}
