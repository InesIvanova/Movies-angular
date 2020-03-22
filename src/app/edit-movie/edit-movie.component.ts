import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../models/Movie';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  id;
  movie: Movie;
  movieForm: FormGroup;
  constructor(private movieService: MovieService, private route: ActivatedRoute, 
    private fb: FormBuilder,
    private router: Router) { 
    this.id = this.route.snapshot.params.id;
    this.movieService.getMovie(this.id).subscribe(data => {
      this.movie = data;
      console.log(this.movie)
      this.movieForm = this.fb.group({
        'title': [this.movie.title],
        'genre': [this.movie.genre],
        'year': [this.movie.year],
      })
    })
    
    
  }

  ngOnInit() {

  }


  editMovie() {
    this.movieService.editMovie(this.id, this.movieForm.value).subscribe(data => {
      console.log(data)
      this.router.navigate(["movies"])
    })
  }

}
