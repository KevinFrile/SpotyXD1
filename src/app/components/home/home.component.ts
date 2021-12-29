import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent{

  nuevosLanzamientos:any [] = [];
  loading:boolean;

  constructor(private spoty:SpotifyService ) {
    this.loading = true;
    this.spoty.getNewReleases()
        .subscribe( (data:any) =>{
          //console.log(data.albums.items)
          this.nuevosLanzamientos = data.albums.items
          this.loading = false;
        });

    
  }

 
}
