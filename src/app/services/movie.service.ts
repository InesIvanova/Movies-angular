import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesPath = environment.apiUrl + "api/v1/movies/";
  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.moviesPath)
  }

  getMovie(id): Observable<Movie> {
    return this.http.get<Movie>(this.moviesPath + id )
  }

  createMovie(data) {
    return this.http.post(this.moviesPath, data)
  }

  editMovie(id, data) {
    return this.http.put(this.moviesPath + id, data)
  }

  deleteMovie(id) {
    return this.http.delete(this.moviesPath + id )
  }
}
