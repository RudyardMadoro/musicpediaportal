import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { SongService } from './song.service';
import { ArtistService } from 'src/app/artists/artist.service';
import { Song } from './song';
import { Artist } from 'src/app/artists/artist';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css'],
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`],
providers: [MessageService,ConfirmationService]
})
export class SongsComponent implements OnInit {

  newDialog: boolean;
  artists:Artist[];
  songs:Song[];
  selectedSongs:Song[];
  selectedArtists: Artist[];

  constructor(private songService: SongService, private artistService: ArtistService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {

    this.artistService.getArtists().subscribe( res => {
      this.artists = res;
    })

    this.songService.getSongs().subscribe(res => {
      this.songs = res;
    })

    this.selectedArtists = []
    this.selectedSongs = []

  }

  deleteSelectedSongs(){

  }
  editSong(song:Song){

  }

  deleteSong(song:Song){
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + song.title + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.songs = this.songs.filter(val => val.id !== song.id);
        //  this.artist = {};
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Song Deleted', life: 3000});
          this.songService.deleteSong(song.id).subscribe(res =>{
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

  save(title:string){
    console.log(title)
    console.log(this.selectedArtists)
    var artistIds = [];
    
    this.selectedArtists.forEach( son => {
      artistIds.push(son.id);

    })
   var alb=  {"title" : title, "artits":artistIds};
   console.log(alb)
   this.songService.createSong(alb).subscribe(res => {
     this.songs.push(res);

   })
   this.newDialog = false;
   this.messageService.add({severity:'success', summary: 'Successful', detail: 'Artist Created', life: 3000});
   this.selectedArtists = []

  }
}
