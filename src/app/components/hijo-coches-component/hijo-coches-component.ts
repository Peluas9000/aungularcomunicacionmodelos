import { Component, Input } from '@angular/core';
import Coche from '../../models/coche';

@Component({
  selector: 'app-hijo-coches-component',
  standalone: false,
  styleUrl: './hijo-coches-component.css',
  templateUrl: './hijo-coches-component.html',
})
export class HijoCochesComponent {
  @Input() car!:Coche;
  constructor(){
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
