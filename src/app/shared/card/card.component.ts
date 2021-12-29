import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{

  @Input() items:any [] = []
  
  constructor(private router:Router) {  }

  artidId:string | undefined;
  
  infoArtist(item:any){

    if (item.type === 'album') {

      this.artidId = item.artists[0].id;

    } else {

      this.artidId = item.id;

    }

    this.router.navigate(['/artist', this.artidId ])
 
  }  

}
