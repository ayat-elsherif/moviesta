import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingleMovieService {

  constructor(private _httpClient:HttpClient) {

   }

   getSingleMediaType(media_type=false, id):Observable<any>
   {   
    return this._httpClient.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=81344b6995891b4c32a31691982d5af9&language=en-US`);
   }

   /*
   getSingleMovie(id):Observable<any>
   {   
    return this._httpClient.get(`https://api.themoviedb.org/3/${id}?api_key=81344b6995891b4c32a31691982d5af9&language=en-US`);
   }

   */
}
