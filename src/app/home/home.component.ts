import { Component, OnInit } from '@angular/core';
import{MovieService} from '../movie.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trends=[];
  pNumber=1;
  pNumbers:number[]=[];
  constructor(public _MovieService:MovieService) {
    for(let i=1;i<=10;i++){
          this.pNumbers.push(i);
    }
    _MovieService.getallTrending(this.pNumber).subscribe((data)=>{
      
        this.trends=data.results;
       // console.log(this.movies);
    });
   }
   changePage(x){
     this.pNumber=x;
    this._MovieService.getallTrending(this.pNumber).subscribe((data)=>{ 
      this.trends=data.results;
     // console.log(this.movies);
  });
   }

 incPage(){
   if(this.pNumber<=this.pNumbers.length){
     console.log(this.pNumber+1);
    this.changePage(this.pNumber + 1);
   }
 }
 
 decPage(){
  if(this.pNumber>1){
    console.log(this.pNumber-1);
   this.changePage(this.pNumber - 1);
  }
}
  ngOnInit() {
  }

}
