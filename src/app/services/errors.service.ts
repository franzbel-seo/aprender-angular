import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { Observable, catchError, delay, throwError } from 'rxjs';
import { NowPlaying } from '../interfaces/now-playing';
import { Movie } from '../interfaces/movie';
import { ErrorMessage } from '../interfaces/error';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {
  API_URL = 'https://api.themoviedb.org/3';
  API_KEY = 'dd641f8b79bd49b4d2d556657cd3d233'
  AUTHORIZATION = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmZiMzUzYjEwYTVhMTA4MjY2MjY3NDU0NWE2MGM5MCIsInN1YiI6IjY2MzA2MGFhOTVjMGFmMDEyYmRhYTdlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TTnvjw6o-ETfJV1UNtQCO16Xlg98Bk8dB-pBq2DhKWA';

  constructor(private http: HttpClient) { }
  movieDetailRandomWithHandler(movieId: number){
    let headers = new HttpHeaders()
    headers = headers.set('Authorization', this.AUTHORIZATION)
    return this.http.get<Movie>( this.API_URL + '/movie/'+ movieId, {headers}).pipe(
      delay(1500),
      catchError(this.manejarError),
    )
  }

  movieDetailRandomBE(movieId: number){
    let headers = new HttpHeaders()
    headers = headers.set('Authorization', this.AUTHORIZATION)
    return this.http.get<Movie>( this.API_URL + '/movie/'+ movieId, {headers}).pipe(
      catchError(this.manejarErrorBE),
    )
  }

  movieDetail200ok(): Observable<Movie>{
    let headers = new HttpHeaders()
    headers = headers.set('Authorization', this.AUTHORIZATION)
    return this.http.get<Movie>( this.API_URL + '/movie/550', {headers})
  }
  movieDetail404NotFound(): Observable<Movie>{
    let headers = new HttpHeaders()
    headers = headers.set('Authorization', this.AUTHORIZATION)
    return this.http.get<Movie>( this.API_URL + '/movie/10000000000', {headers}).pipe(
      catchError(this.manejarError)
    )
  }
  movieDetail401Unauthorized(): Observable<Movie>{
    return this.http.get<Movie>( this.API_URL + '/movie/550').pipe(
      catchError(this.manejarError)
    )
  }
  movieDetail404NotFoundWithoutHandler(): Observable<Movie>{
    let headers = new HttpHeaders()
    headers = headers.set('Authorization', this.AUTHORIZATION)
    return this.http.get<Movie>( this.API_URL + '/movie/10000000000', {headers})
  }
  movieDetail401UnauthorizedWithoutHandler(): Observable<Movie>{
    return this.http.get<Movie>( this.API_URL + '/movie/550')
  }


  private manejarError(error: HttpErrorResponse) {
    // ERROR DE RED O CONEXION
    if( error.status === 0 ){
      console.log('El codigo de estado es:', error.status )
      console.error('El objeto error es:', error.error);
    // ERROR DE BACKEND
    }else {
      console.log('El codigo de estado retornado por el backend', error.status )
      console.error('El objeto error retornado por el backend', error.error);
    }
    return throwError(() => new Error('Algo malo sucedio; Por favor, inténtelo de nuevo más tarde.'))
  }

  private manejarErrorBE(error: HttpErrorResponse) {
    // ERROR DE RED O CONEXION
    if( error.status === 0 ){
      let errorFE: ErrorMessage = {
        status_code: 0,
        status_message: 'Error de red o conexión',
        success: false
      }
      return throwError(() => errorFE)
    // ERROR DE BACKEND
    }else {
      let errorBE: ErrorMessage = {
        status_code: error.error.status_code,
        status_message: error.error.status_message,
        success: error.error.success
      }
      return throwError(() => errorBE)
    }

  }

}
