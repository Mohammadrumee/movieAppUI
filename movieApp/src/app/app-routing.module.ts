import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { MovieSearchComponent } from './component/movie-search/movie-search.component';
import { MovieWatchListComponent } from './component/movie-watch-list/movie-watch-list.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

const routes: Routes = [
  { path: 'index', component: MovieListComponent },
  { path: 'index/movies/:id', component: MovieDetailsComponent },
  { path: 'index/watchlist', component: MovieWatchListComponent },
  { path: 'index/search', component: MovieSearchComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
