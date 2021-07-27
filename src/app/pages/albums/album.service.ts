import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import { Album } from './album';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAlbums() : Observable<any> {
    return this.http.get<any>(`${environment.BASE_URL}albums/list-albums`);
  }

  updateAlbum(album:Album){
    return this.http.post<any>(`${environment.BASE_URL}albums/update-album/${album.id}/`, album);
  }

  createAlbum(album:any){
    return this.http.post<any>(`${environment.BASE_URL}albums/create-album`, album);
  }

  deleteAlbum(id: number){
    return this.http.delete<any>(`${environment.BASE_URL}albums/delete-album/${id}/`);
  }
}