import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/interface/movie';
import { DatabaseConnectionService } from 'src/app/service/database-connection.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private databaseService:DatabaseConnectionService) { }


  movies : Observable<Movie> | any = [];

  show :boolean = false;
  
  ngOnInit(): void {
    this.getAllMovieList();
    this.show = true;
  }

  getAllMovieList(): void {
      this.databaseService.getAllMovieList()
      .subscribe((data) => {
        this.movies = data;    
      });
  }





  

}
