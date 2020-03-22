import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MovieComponent } from './movie/movie.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'movies', component: ListMoviesComponent, canActivate:  [AuthGuardService]  },
  { path: 'movies/create', component: CreateMovieComponent,  canActivate:  [AuthGuardService]  },
  {path: 'movie/:id', component: MovieComponent, canActivate:  [AuthGuardService] },
  {path: 'movie/:id/edit', component: EditMovieComponent, canActivate:  [AuthGuardService] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
