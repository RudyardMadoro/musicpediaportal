import { Artist } from 'src/app/artists/artist'
import { Song } from '../songs/song';

export class Album {
    public constructor(
        public id: number,
        public title:string,
        public artist:Artist,
        public year :number,
        public picture:any,
        public ratings:number,
        //public songs:Song[]
    ){

    }
}
