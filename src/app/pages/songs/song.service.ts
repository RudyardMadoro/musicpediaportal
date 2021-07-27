import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import { Song } from './song';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) { }

  getSongs() : Observable<any> {
    return this.http.get<any>(`${environment.BASE_URL}songs/list-songs`);
  }

  updateSong(song:Song){
    return this.http.post<any>(`${environment.BASE_URL}songs/update-song/${song.id}/`, song);
  }

  createSong(song:any){
    return this.http.post<any>(`${environment.BASE_URL}songs/create-song`, song);
  }

  deleteSong(id: number){
    return this.http.delete<any>(`${environment.BASE_URL}songs/delete-song/${id}/`);
  }
}