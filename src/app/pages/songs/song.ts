import { Artist } from 'src/app/artists/artist';

export class Song {
    public constructor( 
        public id:number,
        public title:string, 
        public artits:Artist[],
        public ratings:number){

    }
}
