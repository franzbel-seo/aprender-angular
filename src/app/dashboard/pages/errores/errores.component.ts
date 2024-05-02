import { Component } from '@angular/core';
import { ErrorsService } from '../../../services/errors.service';
import { Post } from '../../../interfaces/post';
import { CommonModule, JsonPipe } from '@angular/common';
import { NowPlaying, Result } from '../../../interfaces/now-playing';
import { Movie } from '../../../interfaces/movie';
import { ErrorMessage } from '../../../interfaces/error';

@Component({
  standalone: true,
  imports: [JsonPipe, CommonModule],
  templateUrl: './errores.component.html',
  styleUrl: './errores.component.scss'
})
export class ErroresComponent {
  data!: Movie;
  error: string = '';
  mostrarDatos: boolean = false;
  mostrarError: boolean = false;

  dataBE!: Movie;
  errorBE!: ErrorMessage;

  mostrarDatosBE: boolean = false;
  mostrarErrorBE: boolean = false;


  errorFront = {
    "headers":{
       "normalizedNames":{
          
       },
       "lazyUpdate":null,
       "headers":{
          
       }
    },
    "status":0,
    "statusText":"Unknown Error",
    "url":"https://api.themoviedb.org/3/movie/550",
    "ok":false,
    "name":"HttpErrorResponse",
    "message":"Http failure response for https://api.themoviedb.org/3/movie/550: 0 Unknown Error",
    "error":{
       "isTrusted":true
    }
 }
 errorBack = {
  "headers": {
    "normalizedNames": {},
    "lazyUpdate": null
  },
  "status": 401,
  "statusText": "OK",
  "url": "https://api.themoviedb.org/3/movie/550",
  "ok": false,
  "name": "HttpErrorResponse",
  "message": "Http failure response for https://api.themoviedb.org/3/movie/550: 401 OK",
  "error": {
    "status_code": 7,
    "status_message": "Invalid API key: You must be granted a valid key.",
    "success": false
  }
}



  movie200ok!: Movie;
  
  movie404NotFound!: any;
  movie401Unauthorized!: any;

  movie404NotFoundWithoutHandler!: any;
  movie401UnauthorizedWithoutHandler!: any;

  constructor(private errorsService: ErrorsService) { }
  movieDetail200ok() {
    this.errorsService.movieDetail200ok().subscribe(
      data => this.movie200ok = data,
    )
  }
  movieDetail401Unauthorized() {
    this.errorsService.movieDetail401Unauthorized().subscribe(
      data => this.movie200ok = data,
      error => this.movie401Unauthorized = error.message
    )
  }
  movieDetail404NotFound() {
    this.errorsService.movieDetail404NotFound().subscribe(
      data => this.movie200ok = data,
      error => this.movie404NotFound = error.message
    )
  }

  movieDetail401UnauthorizedWithoutHandler() {
    this.errorsService.movieDetail401UnauthorizedWithoutHandler().subscribe(
      data => this.movie200ok = data,
      error => this.movie401UnauthorizedWithoutHandler = error
    )
  }
  movieDetail404NotFoundWithoutHandler() {
    this.errorsService.movieDetail404NotFoundWithoutHandler().subscribe(
      data => this.movie200ok = data,
      error => this.movie404NotFoundWithoutHandler = error
    )
  }
  movieDetailRandomWithHandler(){
    this.mostrarDatos = false;
    this.mostrarError = false;
    let movieId = Math.floor(Math.random() * 100);
    this.errorsService.movieDetailRandomWithHandler(movieId).subscribe(
      data => {
        this.data = data
        this.mostrarDatos = true
      },
      error => {
        this.error = error.message
        this.mostrarError = true
      }
    )
  }


  movieDetailRandomBE(){
    this.mostrarDatosBE = false;
    this.mostrarErrorBE = false;
    let movieId = Math.floor(Math.random() * 100);
    this.errorsService.movieDetailRandomBE(movieId).subscribe(
      data => {
        this.dataBE = data
        this.mostrarDatosBE = true
      },
      error => {
        this.errorBE = error
        console.log('EL ERROR COMPLETO F/B', error)
        this.mostrarErrorBE = true
      }
    )
  }


}
