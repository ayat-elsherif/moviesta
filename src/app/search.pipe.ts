import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies: any[], x:string):any {
    if(x){
      return movies.filter(function(movie:any){
        x=x.toLowerCase();
        if(movie.name){
          return movie.name.toLowerCase().includes(x);
        }else{
          return movie.title.toLowerCase().includes(x);
        }
      });
    }else{
      return movies;
    }
  }

}
