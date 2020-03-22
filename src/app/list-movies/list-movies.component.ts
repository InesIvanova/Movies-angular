import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/Movie';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  movies: Array<Movie>;
  currentUsername;
  constructor(private movieService: MovieService, private authService: AuthService) { 
    this.currentUsername = this.authService.getUsername();
    console.log(this.currentUsername)
  }

  ngOnInit() {
    this.fetchMovies()
  }

  fetchMovies() {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data["results"]
    })
  }

  deleteMovie(id) {
    this.movieService.deleteMovie(id).subscribe(data => {
      this.fetchMovies()
    })
  }

}
