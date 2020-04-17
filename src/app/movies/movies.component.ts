import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
movies=[];
pNumbers=[];
  constructor(public _MovieService:MovieService) { 
    for(let i=1;i<=10;i++){
        this.pNumbers.push(i);
    }
    _MovieService.getallMovies(1).subscribe((data)=>{
      //console.log(data.results);
      this.movies=data.results;
      console.log(this.movies);
    });
  }

  changePage(x){
    this._MovieService.getallMovies(x).subscribe((data)=>{
      this.movies=data.results;
    });
  }

  ngOnInit() {
  }

}
