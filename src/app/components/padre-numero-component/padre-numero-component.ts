import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-numero-component',
  standalone: false,
  styleUrl: './padre-numero-component.css',
  templateUrl: './padre-numero-component.html',
})
export class PadreNumeroComponent {
  
  numeroTotal!: number;
  numero: number = 0;
  arrayNumeros: Array<number> = new Array<number>();
  generarNumero() {
    this.numero = Math.floor(Math.random() * 100);
    this.arrayNumeros.push(this.numero);
  }

  sumarNumeroPadre(numero:number){
    this.numeroTotal+=numero;
  }

  constructor() {
    this.numeroTotal=0;
    this.generarNumero();
    this.arrayNumeros.push(this.numero);
  }

}
