import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './artists/create/create.component';
import { ListComponent } from './artists/list/list.component';
import { ShowComponent } from './artists/show/show.component';
import { EditComponent } from './artists/edit/edit.component';
import { HomeComponent } from './pages/home/home.component';
import { ArtistService } from './artists/artist.service';
import { HttpClientModule } from '@angular/common/http';
import {RatingModule} from 'primeng/rating';
import {FormsModule}  from '@angular/forms';
import { SongsComponent } from './pages/songs/songs.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {RippleModule} from 'primeng/ripple';
import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {CalendarModule} from 'primeng/calendar';
import { SongService } from './pages/songs/song.service';
import {SplitterModule} from 'primeng/splitter';
import {ChartModule} from 'primeng/chart';
import { AlbumService } from './pages/albums/album.service';
import {PickListModule} from 'primeng/picklist';




@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    ShowComponent,
    EditComponent,
    HomeComponent,
    SongsComponent,
    ArtistsComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    CarouselModule,
    ButtonModule,
    RatingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    TableModule,
    RippleModule,
    CardModule,
    ToolbarModule,
    DialogModule,
    ConfirmDialogModule,
    CalendarModule,
    SplitterModule,
    ChartModule,
    PickListModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    ArtistService,
    SongService,
    AlbumService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
