import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/interface/movie';
import { DatabaseConnectionService } from 'src/app/service/database-connection.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  movies    : Movie[] = [];

  searchBy  : Movie [] | any = [];

  searchResult  : Movie[] | any = [];
  
  constructor(private databaseService:DatabaseConnectionService) { }

  ngOnInit(): void {
    this.getAllMovieList();
  }

  getAllMovieList(): void {
      this.databaseService.getAllMovieList()
      .subscribe((data) => {
        this.movies = data;    
      });
  }

  searchMovie() : Movie[] | any {

    console.log(this.searchBy.genre);
    console.log(this.searchBy.name);
    console.log(this.searchBy.movieLength);
    

    if(this.searchBy.name != undefined){
      this.searchResult =  this.movies.filter(movie => movie.name === this.searchBy.name);
      this.clearField();
      return this.searchResult;
    }

    if (this.searchBy.name == undefined && this.searchBy.genre != undefined) {
      this.searchResult = this.movies.filter(movie => movie.genre === this.searchBy.genre);
      this.clearField();
      return this.searchResult;
    }

    if((this.searchBy.name == undefined && this.searchBy.genre == undefined) && this.searchBy.movieLength != undefined){
      this.searchResult = this.movies.filter(movie => Number(movie.movieLength) === Number(this.searchBy.movieLength) );
      this.clearField();
      return this.searchResult;
    }

    if((this.searchBy.name == undefined && this.searchBy.genre == undefined && this.searchBy.movieLength != undefined) 
    || this.searchBy.rating != undefined){
      this.searchResult = this.movies.filter(movie => Number(movie.rating) === Number(this.searchBy.rating));
      this.clearField();
      return this.searchResult;
    }
    
  }

  clearField(){
    this.searchBy.name = undefined;
    this.searchBy.genre = undefined;
    this.searchBy.movieLength = undefined;
    this.searchBy.rating = undefined;
  }

}
