import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../interface/movie';

@Injectable({
  providedIn: 'root'
})
export class DatabaseConnectionService {

  constructor(private httpClient:HttpClient) { }

  movies : Observable<Movie> | any = [];

  getAllMovieList(): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(environment.apiDBEndpoint);
  }

  getMovieById(_id :string) : Observable<Movie> {
      return this.httpClient.get<Movie>(environment.apiDBEndpoint+ "/"+_id);
  }

  setMovieInWatchlist(movie :Movie){
    movie.watchlist = true;
    this.httpClient.put(environment.apiDBEndpoint+"/"+movie._id, movie).subscribe(data =>{
      console.log(data);
    });

  }

  getAllWatchListMovie() : Observable<Movie>{
    return this.httpClient.get<Movie>(environment.apiDBEndpoint+"?q={\"watchlist\" : true}");
  }

  removeWatchList(movie :Movie){
    movie.watchlist = false;
    this.httpClient.put(environment.apiDBEndpoint+"/"+movie._id, movie).subscribe(data =>{
      console.log(data);
    });

  }


}