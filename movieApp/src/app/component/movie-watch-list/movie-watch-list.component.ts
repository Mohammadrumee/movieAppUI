import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Movie } from 'src/app/interface/movie';
import { DatabaseConnectionService } from 'src/app/service/database-connection.service';

@Component({
  selector: 'app-movie-watch-list',
  templateUrl: './movie-watch-list.component.html',
  styleUrls: ['./movie-watch-list.component.css']
})
export class MovieWatchListComponent implements OnInit {

  constructor(private databaseService:DatabaseConnectionService) { }


  movies : Observable<Movie> | any = [];

  ngOnInit(): void {
    this.getAllWatchListMovie();
  }

  getAllWatchListMovie(): void {
    this.databaseService.getAllWatchListMovie().subscribe(data => {
      this.movies = data; 
    });
  }

  removeMovieWatchList(movie: Movie): void{
    const idx = this.movies.findIndex((todo: { _id: string; }) => todo._id == movie._id);
    this.movies.splice(idx, 1);

    this.databaseService.removeWatchList(movie);


  }

}
