import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SeriesComponent } from './series/series.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'movies',component:MoviesComponent},
  {path:'series',component:SeriesComponent},
  {path:'view/:media_type/:id',component:MovieDetailsComponent},
  {path:'view/movie/:id',component:MovieDetailsComponent},
  {path:'view/series/:id',component:MovieDetailsComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

