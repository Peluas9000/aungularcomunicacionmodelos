import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes-component',
  standalone: false,
  styleUrl: './padre-deportes-component.css',
  templateUrl: './padre-deportes-component.html',
})
export class PadreDeportesComponent {
  public deportes : Array<string>;
  
  constructor(){
    this.deportes=new Array<string>();
    this.deportes.push("Futbol");
    this.deportes.push("Baloncesto");
    this.deportes.push("Tenis");
  }

}
