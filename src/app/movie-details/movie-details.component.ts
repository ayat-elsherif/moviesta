import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleMovieService } from '../single-movie.service';
import { observable, combineLatest } from 'rxjs';
//import{rxjs/add/observable/combineLatest}

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
id:number;
media_type:any;
movies=[];
tagline:any;spoken_languages:any;languages:any;poster_path:any;title:any;name:any;original_name:any;first_air_date:any;
  constructor(public route:ActivatedRoute, public _SingleMovieService:SingleMovieService) {  
  this.ngOnInit()
    this._SingleMovieService.getSingleMediaType(this.media_type, this.id).subscribe(data=>{
      this.movies.push(data);
  
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{
      this.id=+params.get('id');
      this.media_type=params.get('media_type');
    });

    
  }

}
