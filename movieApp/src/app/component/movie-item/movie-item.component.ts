import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interface/movie';
import { DatabaseConnectionService } from 'src/app/service/database-connection.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() movieItem: Movie = {
    _id: '',
    name: '',
    description: '',
    genre: '',
    movieLength: 0,
    rating: 0,
    watchlist: false
  };


  @Input() watchList: Movie = {
    _id: '',
    name: '',
    description: '',
    genre: '',
    movieLength: 0,
    rating: 0,
    watchlist: false
  };

  // @Output() removeMovieEvent = new EventEmitter<string>();

  constructor(private router:Router, private databaseService:DatabaseConnectionService) { }

  ngOnInit(): void {
  }

  @Output() removeMovieEvent = new EventEmitter<Movie>();

  removeMovieWatchList(movie: Movie){
    this.removeMovieEvent.emit(movie);
  }



}
