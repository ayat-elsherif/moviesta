import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
movies=[];
  constructor(public _MovieService:MovieService) { 

    _MovieService.getallMovies().subscribe((data)=>{
      //console.log(data.results);
      this.movies=data.results;
    });
  }

  ngOnInit() {
  }

}
