import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  artista:any | undefined;
  canciones:any | undefined;
  loading:boolean | undefined;

  constructor(private router: ActivatedRoute, private spotify:SpotifyService) {

    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTrack(params['id']);

    })
  }

  getArtista(id:string){

    this.loading = true;
    this.spotify.getArtista(id)
                .subscribe( resp => {
                  this.artista = resp;
                  this.loading = false;
                })

  }

  getTrack(id:string){

    this.spotify.getTopTracks(id)
                .subscribe( resp => {
                  console.log(resp);
                  this.canciones = resp
            
                })

  }
}
