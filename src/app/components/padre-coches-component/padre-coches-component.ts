import { Component } from '@angular/core';
import Coche from '../../models/coche';

@Component({
  selector: 'app-padre-coches-component',
  standalone: false,
  styleUrl: './padre-coches-component.css',
  templateUrl: './padre-coches-component.html',
})
export class PadreCochesComponent {
  public arrayCoches: Array<Coche>;

  constructor(){
    this.arrayCoches=new Array<Coche>();
    this.arrayCoches.push(new Coche("Ford","Focus",0,25));
    this.arrayCoches.push(new Coche("Seat","Ibiza",0,20));
    this.arrayCoches.push(new Coche("Renault","Clio",0,15));
  }
  
}
