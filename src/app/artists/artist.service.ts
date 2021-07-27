import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import { Artist } from './artist';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  getArtists() : Observable<any> {
    return this.http.get<any>(`${environment.BASE_URL}apis/list`);
  }

  updateArtist(artist:Artist){
    return this.http.post<any>(`${environment.BASE_URL}apis/update/${artist.id}/`, artist);
  }

  createArtist(artist:any){
    return this.http.post<any>(`${environment.BASE_URL}apis/create`, artist);
  }

  deleteArtist(id: number){
    return this.http.delete<any>(`${environment.BASE_URL}apis/delete/${id}/`);
  }
}
