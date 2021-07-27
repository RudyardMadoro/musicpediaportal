import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './artists/create/create.component';
import { HomeComponent } from './pages/home/home.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { SongsComponent } from './pages/songs/songs.component';


const routes: Routes = [
  { path: 'add-artist', component: CreateComponent },
  { path: '', component: HomeComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'songs', component: SongsComponent },
  { path: 'albums', component: AlbumsComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
