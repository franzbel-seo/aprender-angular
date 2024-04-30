import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { Observable, catchError, throwError } from 'rxjs';
import { NowPlaying } from '../interfaces/now-playing';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {
  API_URL = 'https://api.themoviedb.org/3';
  API_KEY = 'dd641f8b79bd49b4d2d556657cd3d233'
  authorization = '';

  constructor(private http: HttpClient) { }
  getAPost(): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/1')
  }
  notFound(): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/999999')
  }
  

  notFoundWithHandler(): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/999999').pipe(
      catchError( this.manejarError)
    )
  }
  private manejarError(error: HttpErrorResponse) {
    if( error.status === 0 ){
      console.error('An error occurred:', error.error)
    }else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'))
  }
  getMovies(): Observable<NowPlaying>{
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDY0MWY4Yjc5YmQ0OWI0ZDJkNTU2NjU3Y2QzZDIzMyIsInN1YiI6IjY2MzA2MGFhOTVjMGFmMDEyYmRhYTdlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B7p7x0GGxjY1u7GB7H7JQS1fvviPyx9OS8V9jmpr21c')
    return this.http.get<NowPlaying>('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}', {headers})
  }
}
