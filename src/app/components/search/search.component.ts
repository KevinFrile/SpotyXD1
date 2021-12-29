import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artistas:any [] = [];
  loading:boolean | undefined;

  constructor( private spoty:SpotifyService) { 
  }

  buscar(termino:string){
    this.loading = true;
    this.spoty.getArtistas(termino)
        .subscribe( (data:any) =>{
          this.artistas = data.artists.items
          //console.log(this.artistas)
          this.loading = false
        });
        
  }

  

}
