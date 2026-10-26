import { Component, ChangeDetectorRef } from '@angular/core';
import { Comic } from '../../models/comics';

@Component({
  selector: 'app-comics-json-component',
  standalone: false,
  styleUrl: './comics-json-component.css',
  templateUrl: './comics-json-component.html',
})
export class ComicsJsonComponent {
public arrayComics: Array<Comic>;
  constructor(private _cdr: ChangeDetectorRef) {
    this.arrayComics = [];
  }
  
  cargarComics():void{
    //aqui estamos en  public
    let path="./assets/comics.json";
    fetch(path)
    .then(response => response.json())
    .then((data:any[] ) => {
      for(let element of data){
        //creamos un comic de angular
        let comic:Comic=new Comic(element.nombre,element.imagen,element.descripcion);
       
        this.arrayComics.push(comic);
        console.log(element);
      }
      this._cdr.detectChanges();
    })
  }

}
