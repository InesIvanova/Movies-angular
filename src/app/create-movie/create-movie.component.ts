import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
  movieForm: FormGroup;

  constructor(private fb: FormBuilder, private movieService: MovieService,
    private router: Router
    ) { 
    this.movieForm = this.fb.group({
      'title': [''],
      'genre': [''],
      'year': [''],
    })
  }

  ngOnInit() {
  }

  createMovie() {
    this.movieService.createMovie(this.movieForm.value).subscribe(data => {
        this.router.navigate(["movies"])
    })
  }

}
