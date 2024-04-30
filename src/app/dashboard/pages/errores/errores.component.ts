import { Component } from '@angular/core';
import { ErrorsService } from '../../../services/errors.service';
import { Post } from '../../../interfaces/post';
import { JsonPipe } from '@angular/common';
import { NowPlaying, Result } from '../../../interfaces/now-playing';

@Component({
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './errores.component.html',
  styleUrl: './errores.component.scss'
})
export class ErroresComponent {
  postJson!: Post;
  notFound: any;
  notFoundWithHandler: any;
  nowPlaying!: Result[];

  constructor(private errosServicer: ErrorsService){ 
    this.errosServicer.getMovies().subscribe(
      data => console.log(data)
    )
  }

  obtenerDatos(){
    this.errosServicer.getAPost().subscribe(
      data => this.postJson = data
    )
  }
  limpiarJson(){
    
  }
  obtenernotFound(){
    this.errosServicer.notFound().subscribe(
      data => this.notFound = data,
      error => this.notFound = error
    )
  }
  getNotFoundWithHandler(){
    this.errosServicer.notFoundWithHandler().subscribe(
      data => this.notFound = data,
      error => this.notFoundWithHandler = error
    )
  }
  nowPlayingMovies(){
    this.errosServicer.getMovies().subscribe(
      data => this.nowPlaying = data.results
    )
  }
}
