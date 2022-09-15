import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, Subject, Subscription } from 'rxjs';
import { Movie } from 'src/app/interface/movie';
import { DatabaseConnectionService } from 'src/app/service/database-connection.service';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieDetail :Movie | any = [];

  constructor(private route:ActivatedRoute, private apiDBService:DatabaseConnectionService) { }

  private _success = new Subject<string>();

  successMessage :string = '';

  @ViewChild('staticAlert', {static: false}) staticAlert: NgbAlert | undefined;
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert | undefined;

  ngOnInit(): void {

    // GET MOVIE DETAILS BY ID
    this.route.paramMap.subscribe((params) => {
      let id = String(params.get('id'));
      this.getMovieDetailById(id);
    });

   
    // ALERT MESSAGE
    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(3000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }












  getMovieDetailById(_id:string) :void{
    this.apiDBService.getMovieById(_id).subscribe((data) => {
      this.movieDetail = data;    
    });
  }

  addWatchList(movie :Movie){
    this.apiDBService.setMovieInWatchlist(movie);
    this._success.next(`${new Date()} - Added in Watchlist...`); 
  }




}
