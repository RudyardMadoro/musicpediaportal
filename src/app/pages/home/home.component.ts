import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ArtistService } from 'src/app/artists/artist.service';
import { Artist } from 'src/app/artists/artist';
import { SongService } from '../songs/song.service';
import { Song } from '../songs/song';
import { Album } from '../albums/album';
import { AlbumService } from '../albums/album.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  artists:Artist[];
  songs:Song[];
  albums:Album[];
  responsiveOptions;
  val2: number = 3;
  data: any;

  constructor(private artistService:ArtistService, private router:Router, private songService:SongService, private albumService:AlbumService) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
   }

  ngOnInit(): void {
    this.artistService.getArtists().subscribe(res => {
      this.artists = res
      // if(res.status == 200){
      //   console.log(res)
      //   this.artists = res
      //   console.log(this.artists)
      // }
    });

    this.songService.getSongs().subscribe(res => {
      this.songs = res
    });

    this.albumService.getAlbums().subscribe(res =>{
      this.albums = res;
      var labels = [];
      var tempData = [];
      var colors = [];

      this.albums.forEach( album =>{
        labels.push(album.title)
         tempData.push(album.ratings)
         colors.push('#'+Math.random().toString(16).substr(-6));
      })

      this.data = {
        labels: labels,
        datasets: [
            {
                data: tempData,
                backgroundColor: colors,
                hoverBackgroundColor: colors
            }]    
        };
    })

   
  }

  songDetails(song:Song){

  }

}
