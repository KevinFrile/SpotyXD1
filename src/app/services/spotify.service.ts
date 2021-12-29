import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 

  }


  getQuery(query:string){

    const URL = `https://api.spotify.com/v1/${query}`

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDAOQYIEfFmXbyZjR1jaUrGG-NE8i5FLkNBTNrxhRGMm6ibp9oGGN2HeEu_vwtrcaaOvHwUi7oxlqVsf2s'
    });

    return this.http.get(URL, {headers});
  
  }

  getNewReleases(){

    const query:string = "browse/new-releases";
    return this.getQuery(query);
              
  }

  getArtistas(termino:string){

    const query:string = `search?q=${termino}&type=artist&limit=10`;
    return this.getQuery(query);
              
  }

  getArtista(id:string){

    const query:string = `artists/${id}`;
    return this.getQuery(query);
  
              
  }

  getTopTracks(id:string){

    const query:string = `artists/${id}/top-tracks?market=ES`;
    return this.getQuery(query)
               .pipe( map( (data:any) => {
                   return data.tracks;
                }));
    
              
  }

}
