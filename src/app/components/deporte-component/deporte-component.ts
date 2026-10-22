import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deporte-component',
  standalone: false,
  styleUrl: './deporte-component.css',
  templateUrl: './deporte-component.html',
})
export class DeporteComponent {
  @Input() sport!: string;
  public mensaje!: string;
  

  mostrarFavorito(){
    this.mensaje = `Mi deporte favorito es ${this.sport}`;
  }
}
