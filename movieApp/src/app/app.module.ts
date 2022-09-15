import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/header/header.component';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { MovieFormComponent } from './component/movie-form/movie-form.component';
import { MovieSearchComponent } from './component/movie-search/movie-search.component';
import { MovieWatchListComponent } from './component/movie-watch-list/movie-watch-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DbInterceptorService } from './service/db-interceptor.service';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { MovieItemComponent } from './component/movie-item/movie-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieDetailsComponent,
    MovieFormComponent,
    MovieSearchComponent,
    MovieWatchListComponent,
    NotFoundComponent,
    MovieListComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: DbInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
