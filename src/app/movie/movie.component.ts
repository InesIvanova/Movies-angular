import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/Movie';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Movie;
  id;
  constructor(private movieService: MovieService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;

    this.movieService.getMovie(this.id).subscribe(data => {
      this.movie = data;
    })
   }

  ngOnInit() {
  }

}
