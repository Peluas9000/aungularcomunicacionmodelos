import { Component } from '@angular/core';
import Coche from '../../models/coche';

@Component({
  selector: 'app-hijo-coches-component',
  standalone: false,
  styleUrl: './hijo-coches-component.css',
  templateUrl: './hijo-coches-component.html',
})
export class HijoCochesComponent {
  public car:Coche;
  constructor(){
    this.car=new Coche("Ford","Focus",0,25);
  }

  acelerar(){
    console.log('Acelerando...');
    this.car.velocidad+=this.car.aceleracion;
  }

  frenar(){
    console.log('Frenando...');
    this.car.velocidad-=this.car.aceleracion;
    if(this.car.velocidad<0){
      this.car.velocidad=0;
    }
  }

}
