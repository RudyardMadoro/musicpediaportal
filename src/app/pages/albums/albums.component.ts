import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';
import { Album } from './album';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { ArtistService } from 'src/app/artists/artist.service';
import { Artist } from 'src/app/artists/artist';
import { Song } from '../songs/song';
import { SongService } from '../songs/song.service';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`],
providers: [MessageService,ConfirmationService]
})
export class AlbumsComponent implements OnInit {

  albums: Album[];
  selectedAlbums: Album[];
  newDialog: boolean;
  addForm:FormGroup;
  artists:Artist[];
  songs:Song[];
  selectedSongs:Song[];
  selectedArtists: Artist[];

  constructor(private songService: SongService, private artistService: ArtistService, private albumService:AlbumService, private formBuilder:FormBuilder, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {

    this.albumService.getAlbums().subscribe( res => {
      this.albums = res
    });
    this.artistService.getArtists().subscribe( res => {
      this.artists = res;
    })

    this.songService.getSongs().subscribe(res => {
      this.songs = res;
    })

    this.selectedArtists = []
    this.selectedSongs = []

    this.addForm = this.formBuilder.group({
      "title": new FormControl('', Validators.compose([Validators.required])),
      "year": new FormControl('', Validators.compose([Validators.required])),
      
    });
  }

  deleteSelectedAlbums(){

  }
  editAlbum(album:Album){

  }

  deleteAlbum(album:Album){
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + album.title + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.albums = this.albums.filter(val => val.id !== album.id);
        //  this.artist = {};
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Album Deleted', life: 3000});
          this.albumService.deleteAlbum(album.id).subscribe(res =>{
              console.log(res);
          })
      }
  });
  }

  openNew(){
    this.newDialog = true;

  }
  
  hideDialog(){
    this.newDialog = false;
  }

  rate(song: Song){

  }

  save(title:string, year:number){
    console.log(title)
    console.log(year)
    console.log(this.selectedArtists)
    var songIds = [];
    
    this.selectedSongs.forEach( son => {
      songIds.push(son.id);

    })
   var alb=  {"title" : title, "year": year, "artist":this.selectedArtists[0].id, 'songs':songIds};
   console.log(alb)
   this.albumService.createAlbum(alb).subscribe(res => {
     this.albums.push(res);

   })
   this.newDialog = false;
   this.messageService.add({severity:'success', summary: 'Successful', detail: 'Artist Created', life: 3000});


  }
}
