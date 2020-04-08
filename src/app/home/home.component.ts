import { Component, OnInit } from '@angular/core';
import{MovieService} from '../movie.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trends=[];
  pNumbers:number[]=[];
  constructor(public _MovieService:MovieService) {
    for(let i=1;i<=10;i++){
          this.pNumbers.push(i);
    }
    _MovieService.getallTrending(1).subscribe((data)=>{
      
        this.trends=data.results;
       // console.log(this.movies);
    });
   }
   changePage(x:number){
    this._MovieService.getallTrending(x).subscribe((data)=>{ 
      this.trends=data.results;
     // console.log(this.movies);
  });
   }

  ngOnInit() {
  }

}
