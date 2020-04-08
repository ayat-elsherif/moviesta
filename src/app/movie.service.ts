import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public _HttpClient:HttpClient) {
    
   }

   getallTrending():Observable<any>
   {
      return this._HttpClient.get('https://api.themoviedb.org/3/trending/all/day?api_key=81344b6995891b4c32a31691982d5af9');
   }

   getallMovies():Observable<any>
   {
      return this._HttpClient.get('https://api.themoviedb.org/3/discover/movie?api_key=81344b6995891b4c32a31691982d5af9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false');
   }
   
   getAllSeries():Observable<any>
   {
     return this._HttpClient.get('https://api.themoviedb.org/3/discover/tv?api_key=81344b6995891b4c32a31691982d5af9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false');
   }
}
