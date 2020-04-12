import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
series=[];
  constructor(public _MovieService:MovieService) { 
    _MovieService.getAllSeries().subscribe((data)=>{
      this.series=data.results;
      console.log(this.series);
    });
  }

  ngOnInit() {
  }

}
