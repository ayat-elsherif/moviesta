import { Component, OnInit } from '@angular/core';
import{MovieService} from '../movie.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trends=[];

  constructor(public _MovieService:MovieService) {
    _MovieService.getallTrending().subscribe((data)=>{
        this.trends=data.results;
       // console.log(this.movies);
    });
   }

  ngOnInit() {
  }

}
